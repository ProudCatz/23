/// <reference path="C:\Users\z\Documents\Visual Studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.2.3.js" />

$.fn.myadd = function (a, b) {
    b.addClass(a);
}


$(document).ready(function () {
    $("#test").myadd("btn btn-success", $("#btn"))
    //$("#test").css({ "background": "blue" })
    //$("#btn").addClass("btn btn-success");
});
