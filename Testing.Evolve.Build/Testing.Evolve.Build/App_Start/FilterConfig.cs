using System.Web;
using System.Web.Mvc;

namespace Testing.Evolve.Build
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
