/// <reference path="C:\Users\z\Documents\Visual Studio 2015\Projects\WebApplication2\WebApplication2\Scripts/jquery-2.2.3.js" />


$(document).ready(function () {
    $("#btnselect").click(function () {
        var ss = $("#txt").val() == "" ? 0 : $("#txt").val();
        $("#div2").html("数据请求中,请稍后.....");
        $.post("WebForm1.aspx/sel", "{'id':'" + ss + "'}", function (text, status) {
            $("#div2").html(text.d);
        })
    })
});

//$(document).ready(function () {
//    $("#btnselect").click(function () {
//        var ss = $("#txt").val() == "" ? 0 : $("#txt").val();
//        $("#div2").html("数据请求中,请稍后.....");
//        $.ajax({
//            type: "post",
//            url: "WebForm1.aspx/sel",
//            data: "{'id':'" + ss + "'}",
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: (function (text) {
//                $("#div2").html(text.d);
//            })
//        })
//    });
//});
//$(function () {
//    $("#btnselect").click(function () {
//        var ss = $("#txt").val() == "" ? 0 : $("#txt").val();
//        $("#table").html("数据请求中,请稍后.....");
//        $.ajax({
//            type: "post",
//            url: "WebForm1.aspx/select",
//            data: "{'id':'" + ss + "'}",
//            datatype: "json",
//            contentType: "application/json; charset=utf-8",
//            success: function (data) {
//                $("#table").html("");
//                $(data.d).each(function () {
//                    $("#table").addClass("#ta");
//                    $("#table").append("<tr>" + this + "</tr>");
//                })
//            }
//        })
//    })
//});







//$().ready(function () {
//    $('#btnselect').click(function () {
//        var ss = $("#txt").val() == "" ? 0 : $("#txt").val();
//        //采用POST方式调用服务
//        $.post('WebForm1.aspx/sel', { id: ss }, function (text, status) { alert(text); });
//    })

//})