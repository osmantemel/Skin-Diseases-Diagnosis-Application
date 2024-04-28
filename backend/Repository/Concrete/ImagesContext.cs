using Microsoft.EntityFrameworkCore;
using Entity;

namespace Repositories.Concrete
{
    public class ImagesContext : DbContext
    {
        public DbSet<Images> Images { get; set; }
        public DbSet<ResponseImages> Responses { get; set; }
        public DbSet<feedback> feedbacks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite("Data Source=images.db");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Optional: Configure your entity mappings or relationships here
            // For example:
            // modelBuilder.Entity<Image>().HasKey(i => i.Id);
            // modelBuilder.Entity<Image>().Property(i => i.Name).IsRequired();
            // modelBuilder.Entity<ResponseImage>().HasKey(r => r.Id);
        }
    }
}
