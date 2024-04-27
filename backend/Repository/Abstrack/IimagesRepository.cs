using Entity;

namespace Repositories.Abstrack;

public interface IimagesRepository
{
    Images GetByIdAsync(int id);

    List<Images> GetAll();

    void AddImages(Images images);

    bool DeleteImage(int id);
}