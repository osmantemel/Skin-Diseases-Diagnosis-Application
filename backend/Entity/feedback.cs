using System.ComponentModel.DataAnnotations;
namespace Entity;

public class feedback
{
    [Key]
    public int id { get; set; }
    [Required]
    public string fullName { get; set; }
    public string email { get; set; }
    public string phone { get; set; }
    public string message { get; set; }
}