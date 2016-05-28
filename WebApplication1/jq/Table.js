/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.2.3.js" />

//$(function () {
//    $("#btnAdd").click(function () {
//        $.get("Table/Index");
//    })
//});


$(function () {
    $("a").click(function () {
        //console.log($(this).parents("tr").find("td:first").html());
        var id = {
            //返回id 点击删除按钮当前行的ID列内容
            id: $(this).parents("tr").find("td:first").html()
        };
        $.post("Table/RemoveRow", id, function (data) {
            document.getElementById(data).remove();

        });
    });
});