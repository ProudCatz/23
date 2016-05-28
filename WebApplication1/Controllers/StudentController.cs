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
            //Student stu = new Student();
            //stu.Email = "123@qq.com";
            //stu.Address = "保定";
            //stu.IdCard = "130604199012130549";
            //stu.Name = "阿彪";
            //stu.Tel = "13935655984";
            return View();
        }

        [HttpPost]
        public ActionResult AddStudent(Student stu)
        {
            if (stu.id == 0 && stu.Email != null && stu.IdCard != null && stu.Name != null && stu.Tel != null)
            {
                return Json(stu);
            }
            return Json("false");
        }
    }
}