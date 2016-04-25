using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace WebApplication2
{
    /// <summary>
    /// WebService1 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
    // [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }


        [WebMethod]
        public static List<object> select(string id)
        {
            SqlConnection conn = new SqlConnection("Data Source=Z-PC\\MSSQL14;Initial Catalog=Mall;Persist Security Info=True;User ID=sa;Password=feifeidemao");
            SqlCommand cmd = new SqlCommand();
            DataSet ds = new DataSet();
            conn.Open();
            cmd.CommandText = "select * from Role where id !=" + id;
            cmd.Connection = conn;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ds);
            DataTable dt = new DataTable();
            dt = ds.Tables[0];
            List<object> li = new List<object>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                li.Add(dt.Rows[i][0] + " : " + dt.Rows[i][1]);
            }
            return li;
        }
    }
}
