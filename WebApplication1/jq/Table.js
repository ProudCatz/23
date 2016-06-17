/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.2.3.js" />

//$(function () {
//    $("#btnAdd").click(function () {
//        $.get("Table/Index");
//    })
//});

$(document).ready(function () {
    $("#btnAdd").click(function () {
        var id = {
            id: "1"
        };
        $.post("Table/AddNewRow", id, function (data) {
            //console.log(data[45]);
            //console.log(data.length);
            //console.log(data[0].ProductId);
            var result = data[data.length - 1];
            $("#table").append("<tr id='" + result.Id + "'><td>" + result.ProductId + "</td><td>" + result.ProductName + "</td><td>" + result.Price + "</td><td>" + result.count + "</td><td>" + result.Pricess + "</td><td><a onclick='del()' class='btn btn-link'>删除</a></td></tr>");
        })
    })
});

$(this).mousedown(function () {

})


function del() {
    $("td>a,a[onclick]").each(function () {
        $(this).mousedown(function () {
            //    //console.log($(this).parents("tr").attr("id"))
            //    var id = {
            //        //返回id 点击删除按钮当前行的ID列内容
            //        //id: $(this).parents("tr").find("td:first").html()
            //        id: $(this).parents("tr").attr("id")
            //    };
            //    $.post("Table/RemoveRow", id, function (data) {
            //        document.getElementById(data).remove();
            //        //console.log($("td[tt][tt='xxx']"));
            //    });
            console.log($(this).parents("tr").attr("id"));
            return false;
        });

    })
}







//$(document).ready(function () {
//    $("a").on("click", function () {
//        alert(1);
//        console.log($(this).parents("tr").attr("id"));
//        //console.log($(this).parents("tr").find("td:first").html());
//        var id = {
//            //返回id 点击删除按钮当前行的ID列内容
//            //id: $(this).parents("tr").find("td:first").html()
//            id: $(this).parents("tr").attr("id")
//        };
//        $.post("Table/RemoveRow", id, function (data) {
//            document.getElementById(data).remove();
//            //console.log($("td[tt][tt='xxx']"));

//        });
//    });
//});




