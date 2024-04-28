using System.ComponentModel.DataAnnotations;

namespace Entity;

public class ResponseImages
{
[Key]
 public int ImgId { get; set; }

 public String top_disease { get; set; }
 public String second_top_disease { get; set; }
//  public int top_disease_Rate { get; set; }
//  public int second_top_disease_Rate { get; set; }
 public String diseaseRates { get; set; }
 public String description { get; set; }
}

