/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.0.0.js" />
$(document).ready(function () {
    $("#btn").click(function () {
        var ss = {
            Email: $("#Email").val(),
            Name: $("#Name").val(),
            Tel: $("#Tel").val(),
            Address: $("#Address").val(),
            IdCard: $("#IdCard").val()
        };
        $.post("Student/AddStudent", ss, function (text) {
            if (text == "true") {
                alert("添加成功");
            }
            else {
                alert("添加失败");
            }
        });
    });
});