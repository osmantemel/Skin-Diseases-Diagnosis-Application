import sqlite3
import base64
from PIL import Image
from io import BytesIO
import time
import numpy as np
from tensorflow.keras.models import load_model

MODEL_PATH = "C:/Users/Osman/Desktop/DOCUMENTS/teknofest/model/cnn_model.h5"
IMAGE_PATH = "C:/Users/Osman/Desktop/DOCUMENTS/teknofest/Skin-Diseases-Diagnosis-Application/resim.png"

CLASS_LABELS = {
    0: "Sivilce ve Rozasea",
    1: "Aktinik Keratoz Bazal Hücreli Kanser ve Diğer Kötü Huylu Lezyonlar",
    2: "Atopik Dermatit",
    3: "Selülit, Impetigo ve Diğer Bakteriyel Enfeksiyonlar",
    4: "Egzama",
    5: "Exanthems ve İlaç Reaksiyonları",
    6: "Herpes, HPV ve Diğer Cinsel Yolla Bulaşan Hastalıklar",
    7: "Işık Hastalıkları ve Pigmentasyon Bozuklukları",
    8: "Lupus ve Diğer Bağ Doku Hastalıkları",
    9: "Melanom, Deri Kanseri, Nevi ve Benekler",
    10: "Zehirli Sarmışağı, Fotoğraflar ve Diğer Temas Dermatitleri",
    11: "Psoriasis Fotoğrafları, liken Planus ve İlgili Hastalıklar",
    12: "Seboreik Keratoz ve Diğer İyi Huylu Tümörler",
    13: "Sistemik Hastalıklar",
    14: "Tinea, Mantar Enfeksiyonları ve Diğer Fungal Enfeksiyonlar",
    15: "Ürtiker, Kurdeşen",
    16: "Vasküler Tümörler",
    17: "Vaskülit",
    18: "Siğiller, Molluskum ve Diğer Viral Enfeksiyonlar",
}


def load_ai_model(model_path):
    return load_model(model_path)

def preprocess_image(image_path):
    image = Image.open(image_path)
    image = image.resize((192, 192))
    image = image.convert("RGB")
    return np.expand_dims(np.array(image), axis=0)

def predict_disease(model, image_array):
    predictions = model.predict(image_array)[0]
    max_indices = np.argsort(predictions)[-3:][::-1]  # En büyük üç orana sahip hastalıkların indekslerini al
    top_disease = CLASS_LABELS[max_indices[0]]  # En büyük oranlı hastalık
    second_top_disease = CLASS_LABELS[max_indices[1]]  # İkinci en büyük oranlı hastalık
    return top_disease, second_top_disease


# def predict_disease(model, image_array):
#     predictions = model.predict(image_array)[0]
#     max_index = np.argmax(predictions)
#     print(predictions)
#     return CLASS_LABELS[max_index]

def base64_to_image(base64_string):
    image_data = base64.b64decode(base64_string.split(',')[1])
    return Image.open(BytesIO(image_data))

def check_new_data(cursor):
    cursor.execute("SELECT img FROM images ORDER BY imgId DESC LIMIT 1")
    return cursor.fetchone()


def update_database(conn, cursor, disease, base64_image,second_top_disease):
    diseaseRates="osman"
    description ="temel"
    cursor.execute("INSERT INTO Responses (top_disease,second_top_disease,diseaseRates,description ) VALUES (?, ?, ?, ?)", 
                   (disease, second_top_disease,diseaseRates,description)
                   )
    conn.commit()

def main():
    model = load_ai_model(MODEL_PATH)
    conn = sqlite3.connect("C:/Users/Osman/Desktop/DOCUMENTS/teknofest/Skin-Diseases-Diagnosis-Application/backend/api/images.db")
    cur = conn.cursor()
    last_data = None

    try:
        while True:
            new_data = check_new_data(cur)
            if new_data and new_data != last_data:
                last_data = new_data
                base64_image = new_data[0]
                image = base64_to_image(base64_image)
                image.save(IMAGE_PATH, "png")
                image_array = preprocess_image(IMAGE_PATH)
                disease, second_top_disease = predict_disease(model, image_array)
                print("Predicted Disease:", disease)
                update_database(conn, cur, disease, base64_image,second_top_disease)
                print("Database updated with predicted disease.")
            elif not new_data:
                print("No new data found.")
            time.sleep(5)
    except KeyboardInterrupt:
        print("Process interrupted by user.")
    finally:
        conn.close()

if __name__ == "__main__":
    main()
