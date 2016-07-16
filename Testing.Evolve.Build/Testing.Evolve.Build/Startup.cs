using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Testing.Evolve.Build.Startup))]
namespace Testing.Evolve.Build
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
