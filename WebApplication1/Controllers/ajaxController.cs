using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

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
            stu stu = new stu();
            stu.id = "1";
            stu.name = "2";
            stu.sex = "3";
            return View(stu);

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

        [HttpPost]
        public ActionResult selmodel(stu stu)
        {
            stu.id += "1";
            stu.name += "2";
            stu.sex += "3";
            return Json(stu);
        }
    }
}