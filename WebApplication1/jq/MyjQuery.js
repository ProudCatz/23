/// <reference path="C:\Users\z\Documents\Visual Studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.2.3.js" />


//自定义函数
$.fn.myadd = function (a, b) {
    b.addClass(a);
}


$(document).ready(function () {
    $("#test").myadd("btn btn-success", $("#btn"))
    //$("#test").css({ "background": "blue" })
    //$("#btn").addClass("btn btn-success");
});
//






//自定义事件
$(function () {
    $("#btn").bind("myClick0", function () {
        $("#test").append("自定义事件0").append($("<br>"));
    });
    $("#btn").bind("myClick1", function () {
        $("#test").append("自定义事件1").append($("<br>"));
    });
    $("#btn").bind("myClick2", function () {
        $("#test").append("自定义事件2").append($("<br>"));
    });
});

$(function () {
    var i = 0;
    $("#btn").click(function () {
        $(this).trigger("myClick" + i);
        i = i + 1;
        if (i > 2) {
            i = 0;
        }
    })
})
//