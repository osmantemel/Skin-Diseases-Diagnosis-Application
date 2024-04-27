using Entity;
using Microsoft.EntityFrameworkCore;

namespace Repositories.Concrete
{
    public class ImagesContext : DbContext
    {
        public DbSet<Images> Images { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
          optionsBuilder.UseSqlite("Data Source=images.db");
        }
    }
}