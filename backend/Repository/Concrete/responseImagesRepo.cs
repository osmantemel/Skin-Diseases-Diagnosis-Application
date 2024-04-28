using Entity;
using Repositories.Abstrack;

namespace Repositories.Concrete
{
    public class responseImagesRepo : IresponseImages
    {
        public bool DeleteResponses(int id)
        {
            using (var context = new ImagesContext())
            {
                ResponseImages response = context.Responses.FirstOrDefault(p => p.ImgId == id);
                if (response != null)
                {
                    context.Responses.Remove(response);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }

        public List<ResponseImages> GetAllResponses()
        {
            using (var db = new ImagesContext())
            {
                return db.Responses.ToList();
            }
        }

        public ResponseImages returnResponse(int id)
        {
            using (var context = new ImagesContext())
            {
                try
                {

                    ResponseImages image = context.Responses.FirstOrDefault(p => p.ImgId == id);

                    if (image == null)
                    {
                        image.description = "Cevap Bulunmadı";
                        return image;
                    }
                    else
                    {
                        return image;
                    }
                }
                catch (Exception e)
                {
                    return new ResponseImages
                    {
                        description = "Hata: " + e.Message,
                    };
                }

            }
        }
    }
}