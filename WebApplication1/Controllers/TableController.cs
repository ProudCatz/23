using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class TableController : Controller
    {

        public List<Products> list = new List<Products>();

        public Products product = new Products();
        public bool bo = true;
        // GET: Table
        public ActionResult Index()
        {
            //if (Session["list"] != null)
            //{
            //    list = (List<Products>)Session["list"];
            //    if (list.Count > 0)
            //    {
            //        product.Id = list.Last().Id;
            //    }
            //}
            //if (bo)
            //{
            //    product.Id++;
            //    product.ProductId = Guid.NewGuid().ToString();
            //    product.ProductName = "测试";
            //    product.Price = 10;
            //    product.count = 1;
            //    product.Pricess = product.Price * product.count;
            //    list.Add(product);
            //}
            //Session["list"] = list;
            //bo = true;
            //return View(list);
            return View();
        }

        [HttpPost]
        public ActionResult AddNewRow(string id)
        {
            if (Session["list"] != null)
            {
                list = (List<Products>)Session["list"];
                if (list.Count > 0)
                {
                    product.Id = list.Last().Id;
                }
            }
            if (bo)
            {
                product.Id++;
                product.ProductId = Guid.NewGuid().ToString();
                product.ProductName = "测试";
                product.Price = 10;
                product.count = 1;
                product.Pricess = product.Price * product.count;
                list.Add(product);
            }
            Session["list"] = list;
            bo = true;
            return Json(list);
        }

        [HttpPost]
        public ActionResult RemoveRow(string id)
        {
            list = (List<Products>)Session["list"];
            Products pro = new Products();
            pro = list.Find(key => key.Id.ToString() == id);
            list.Remove(pro);
            bo = false;
            Session["list"] = list;
            //Index();
            return Json(id);
        }
    }
}