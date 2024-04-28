using System;
using System.Collections.Generic;
using System.Linq;
using Entity;
using Repositories.Abstrack;

namespace Repositories.Concrete
{
    public class feedbackRepo : Ifeedback
    {
        public void AddImages(feedback feedback)
        {
            using (var context = new ImagesContext())
            {
                context.feedbacks.Add(feedback);
                context.SaveChanges();
            }
        }
    }
}