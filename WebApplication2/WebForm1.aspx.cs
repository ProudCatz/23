using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication2
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string SayHello(string pid)
        {
            string aaa = pid;
            return aaa;
        }



        [WebMethod]
        public static List<string> GetArray()
        {
            List<string> li = new List<string>();
            for (int i = 0; i < 10; i++)
                li.Add(i + "");
            return li;
        }

        [WebMethod]
        public static List<object> select(string id)
        {
            
            DataTable dt = new DataTable();
            dt = Data(id);
            List<object> li = new List<object>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                List<object> li2 = new List<object>();
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    li2.Add("<td>" + dt.Rows[i][j] + "</td>");
                }
                li.Add(li2);
            }
            return li;
        }

     
        public static DataTable Data(string id)
        {
            SqlConnection conn = new SqlConnection("Data Source=Z-PC\\MSSQL14;Initial Catalog=Mall;Persist Security Info=True;User ID=sa;Password=feifeidemao");
            SqlCommand cmd = new SqlCommand();
            DataSet ds = new DataSet();
            conn.Open();
            cmd.CommandText = "select * from UserInfor where id !=" + id;
            cmd.Connection = conn;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }



    }
}