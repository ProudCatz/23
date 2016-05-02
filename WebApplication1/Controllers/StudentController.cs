using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddStudent()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddStudent(Student stu)
        {
            if (stu.id == 0 && stu.Email != null && stu.Address != null && stu.IdCard != null && stu.Name != null && stu.Tel != null)
            {
                return Json("true");
            }
            return Json("false");
        }
    }
}