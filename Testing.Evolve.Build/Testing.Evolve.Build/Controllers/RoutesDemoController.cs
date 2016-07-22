using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Testing.Evolve.Build.Controllers
{
    public class RoutesDemoController : Controller
    {
        public ActionResult One()
        {
            return View();
        }

        public ActionResult Two(int donuts = 1)
        {
            ViewBag.Donuts = donuts;
            return View();
        }

        //[Authorize]
        public ActionResult Three()
        {
            return View();
        }

        public ActionResult Four()
        {
            return View();
        }

        public ActionResult CharacterSelection()
        {
            return View();
        }
    }

}