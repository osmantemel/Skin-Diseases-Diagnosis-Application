using Entity;
namespace Repositories.Abstrack;

public interface IresponseImages
{
    ResponseImages returnResponse(int id);
    bool DeleteResponses(int id);
    List<ResponseImages> GetAllResponses();
}