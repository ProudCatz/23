/// <reference path="C:\Users\z\Documents\Visual Studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.2.3.js" />

//自定义事件和自定义函数联动

//自定义函数
$.fn.myadd = function (a, b) {
    b.addClass(a);
}


$(document).ready(function () {
    // $("#test").myadd("btn btn-success", $("#btn"))
});
//





//自定义事件
$(function () {
    $("#btn").bind("myClick0", function () {
        $("#test").append("自定义事件0绿色").append($("<br>"));
        $("#btn").myadd("btn btn-success", $("#btn"))
    });
    $("#btn").bind("myClick1", function () {
        $("#test").append("自定义事件1红色").append($("<br>"));
        $("#btn").myadd("btn btn-danger", $("#btn"))
    });
    $("#btn").bind("myClick2", function () {
        $("#test").append("自定义事件2蓝色").append($("<br>"));
        $("#btn").myadd("btn btn-info", $("#btn"))
    });
});

$(function () {
    var i = 0;
    $("#btn").click(function () {
        $("#btn").removeClass();
        $(this).trigger("myClick" + i);
        i = i + 1;
        if (i > 2) {
            i = 0;
        }
    })
})
//