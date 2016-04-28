/// <reference path="C:\Users\z\Documents\Visual Studio 2015\Projects\WebApplication2\WebApplication2\Scripts/jquery-2.2.3.js" />


$(document).ready(function () {
    $("#btnselect").click(function () {
        var ss = $("#txt").val() == "" ? 0 : $("#txt").val();
        $("#div2").html("数据请求中,请稍后.....");
        $.post("WebForm1.aspx/sel", { id: $("#txt").val() }, function (text, status) {
            $("#div2").html(text.d);
        });
    })
});

//$(document).ready(function () {
//    $("#btnselect").click(function () {
//        var ss = $("#txt").val() == "" ? 0 : $("#txt").val();
//        var dd = "{ id: 'ss', name: 'ss', sex: 'ss'  }";
//        $("#div2").html("数据请求中,请稍后.....");
//        $.ajax({
//            type: "post",
//            url: "WebForm1.aspx/sel2",
//            //data: "{'id':'" + ss + "'}",
//            //data: { id: ss, name: ss, sex: ss },
//            data: dd,
//            contentType: "application/json;",
//            success: (function (text) {
//                //$("#div2").load("p.htm");
//                $("#div2").text(text.d);
//            })
//        })
//    });
//});
