using System;
using System.Collections.Generic;
using System.Linq;
using Entity;
using Repositories.Abstrack;

namespace Repositories.Concrete
{
    public class ImagesRepository : IimagesRepository
    {
        public Images GetByIdAsync(int id)
        {
            using (var context = new ImagesContext())
            {
                try
                {

                    Images image = context.Images.FirstOrDefault(p => p.ImgId == id);

                    if (image == null)
                    {
                        image.description = "Resim Bulunmadı";
                        image.Img = "null";
                        return image;
                    }
                    else
                    {
                        return image;
                    }
                }
                catch (Exception e)
                {
                   
                    return new Images 
                    {
                        description = "Hata: " + e.Message,
                        Img = "null"
                    };
                }


            }
        }

        public List<Images> GetAll()
        {
            using (var db = new ImagesContext())
            {
                return db.Images.ToList();
            }
        }

        public void AddImages(Images images)
        {
            using (var context = new ImagesContext())
            {
                context.Images.Add(images);
                context.SaveChanges();
            }
        }
        public void AddImagesBit(String image){
            using (var context = new ImagesContext())
            {
                Images images = new Images();
                images.Img = image;
                images.description="resim";
                context.Images.Add(images);
                context.SaveChanges();
            }
        }

        public bool DeleteImage(int id)
        {
            using (var context = new ImagesContext())
            {
                Images image = context.Images.FirstOrDefault(p => p.ImgId == id);
                if (image != null)
                {
                    context.Images.Remove(image);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}
