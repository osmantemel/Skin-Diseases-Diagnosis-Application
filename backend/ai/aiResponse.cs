// using System;
// using System.IO;
// using TensorFlow;

// namespace ai
// {
//     public class AIResponse
//     {
//         public void MakePrediction()
//         {
//             // TensorFlow modelinin ve etiket dosyasının yolları
//             string modelPath = "your_model.h5";
//             string imagePath = "test_image.jpg";
//             string labelPath = "labels.txt";

//             // TensorFlowSharp ile modeli yükle
//             using (var graph = new TFGraph())
//             {
//                 var model = new TFModel();
//                 var buffer = File.ReadAllBytes(modelPath);
//                 graph.Import(buffer);
//                 model.Graph = graph;

//                 // Girdi resmini oku ve TensorFlow tensorüne dönüştür
//                 var image = File.ReadAllBytes(imagePath);
//                 var tensor = ImageUtil.CreateTensorFromImage(image);

//                 // Girdi tensorünü modelin girişine ver
//                 var runner = model.Graph.GetRunner();
//                 runner.AddInput(model.Graph["input_1"][0], tensor);
//                 runner.Fetch(model.Graph["dense_2/Softmax"][0]);

//                 // Tahmini çalıştır
//                 var output = runner.Run();

//                 // Tahmin sonuçlarını al
//                 var result = output[0] as TFTensor;
//                 var probabilities = ((float[][])result.GetValue(jagged: true))[0];

//                 // En yüksek olasılığa sahip sınıfı bul
//                 var maxIndex = 0;
//                 var maxProbability = 0f;
//                 for (int i = 0; i < probabilities.Length; i++)
//                 {
//                     if (probabilities[i] > maxProbability)
//                     {
//                         maxProbability = probabilities[i];
//                         maxIndex = i;
//                     }
//                 }

//                 // Sınıf etiketlerini yükle
//                 string[] labels = File.ReadAllLines(labelPath);

//                 // Sonuçları yazdır
//                 Console.WriteLine($"Tahmin edilen sınıf: {labels[maxIndex]}");
//                 Console.WriteLine($"Tahmin edilen olasılık: {maxProbability}");
//             }
//         }
//     }
// }
