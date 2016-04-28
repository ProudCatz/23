using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class ajaxController : Controller
    {
        // GET: ajax
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult select()
        {
            return View();

        }

        [HttpPost]
        public ActionResult select(string id, string name, string sex)
        {
            int s = 100;
            string ss = id + "    " + name + "    " + sex;
            List<string> li = new List<string>();
            for (int i = 0; i < 10; i++)
            {
                li.Add(ss + i.ToString());
            }
            return Json(li);
        }
    }
}