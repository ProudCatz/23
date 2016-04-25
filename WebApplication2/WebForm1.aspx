<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication2.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="Scripts/jquery-2.2.3.js"></script>
    <script type="text/javascript">

        $(function () {
            $("#btn").click(function () {
                var aa = $("#txt").val();
                $.ajax({
                    type: "post", //要用post方式                 
                    url: "WebForm1.aspx/SayHello",//方法所在页面和方法名
                    data: "{'pid':'" + aa + "' }",
                    datatype: "json",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        alert(data.d);//返回的数据用data.d获取内容
                        //$("#TextBox1").val(data.d);
                    }
                });
            });
        });

        $(function () {
            $("#btnOK").click(function () {
                $.ajax({
                    type: "Post",
                    url: "WebForm1.aspx/GetArray",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        //插入前先清空ul   
                        $("#list").html("");
                        //递归获取数据   
                        $(data.d).each(function () {
                            //插入结果到li里面   
                            $("#list").append("<li>" + this + "</li>");
                        });
                        alert(data.d);
                    },
                    error: function (err) {
                        alert(err);
                    }
                });
                //禁用按钮的提交   
                return false;
            });
        });



    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <input type="button" id="btn" value="button" />
            <input type="text" id="txt" />

            <input type="button" id="btnOK" value="btnOK" />
            <ul id="list"></ul>
        </div>
    </form>
</body>
</html>
