import sqlite3
import base64
from PIL import Image
from io import BytesIO


def base64_to_image(base64_string):
    image_data = base64.b64decode(base64_string.split(',')[1])
    image = Image.open(BytesIO(image_data))
    return image

conn = sqlite3.connect("C:/Users/Osman/Desktop/DOCUMENTS/teknofest/Skin-Diseases-Diagnosis-Application/backend/api/images.db")
cur = conn.cursor()
cur.execute("SELECT img FROM images where imgId = 30")
veri = cur.fetchone() 

if veri:  
    base64_image = veri[0]  
    image = base64_to_image(base64_image)
    image.save("resim.png", "png")
    image.show()
else:
    print("Veri bulunamadı.")

conn.close()
