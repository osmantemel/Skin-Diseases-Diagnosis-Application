using System.ComponentModel.DataAnnotations;

namespace Entity;

public class Images
{
    [Key]
    public int ImgId { get; set; }
    [Required]
    public string Img { get; set; }
    public string description { get; set; }
}