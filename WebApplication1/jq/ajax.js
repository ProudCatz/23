/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.2.3.js" />

$(document).ready(function () {
    $("#btnselect").click(function () {
        var ss = $("#txt").val() == "" ? 0 : $("#txt").val();
        $("#div2").html("数据请求中,请稍后.....");
        $.post("ajax/select", { id: ss, name: ss + "1", sex: ss + "2" }, function (text) {
            $("#div2").html("");
            $(text).each(function () {
                $("#div2").append(this);
                $("#list").append("<li>" + this + "</li>");
            });
        });
    });
});