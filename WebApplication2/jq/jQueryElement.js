/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication2\Scripts/jquery-2.2.3.js" />


$(document).ready(
    function () {
        $("#btn1").click(function () {
            alert($("#p1").attr("id"));
        });
    });


$(document).ready(
    function () {
        $("#btn2").click(function () {
            $("#p1").attr("style", "background-color:#66ccff"),
            alert($("#p1").attr("style"));
        });
    });


$(document).ready(
    function () {
        $("#btn3").click(function () {
            $("#div").append($("#p1").attr("style"))
        });
    });

$(document).ready(
    function () {
        $("#btn4").click(function () {
            $("#p1").removeAttr("style")
        });
    });

$(document).ready(
    function () {
        $("#btn5").click(function () {
            $("#p3").remove();
        });
    });

