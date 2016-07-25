using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Classes
{
    public class Constructor
    {
        public Constructor()
        {
            this.id = "123";
            this.name = "小明";
        }

        public Constructor(string id)
        {
            this.id = id;
            this.name = "小红";
        }

        public string id
        { get; set; }

        public string name
        { get; set; }

        public string Get()
        {
            return this.id + this.name;
        }


    }
}