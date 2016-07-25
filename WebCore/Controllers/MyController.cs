using Microsoft.AspNetCore.Mvc;
using WebCore.Model;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebCore.Controllers
{
    public class MyController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(My mm)
        {
            mm.id = mm.id + "0000";
            mm.name = mm.name + "0000";
            ViewBag.id = mm.id;
            ViewBag.name = mm.name;
            return View();
        }

        public IActionResult Test()
        {
            return View();
        }
    }
}
