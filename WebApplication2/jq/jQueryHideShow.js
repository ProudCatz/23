/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication2\Scripts/jquery-2.2.3.js" />


$(document).ready(
    function () {
        $("#btn1").click(function () {
            $("#p1").hide(1000)
        });
    });

$(document).ready(
    function () {
        $("#btn2").click(function () {
            $("#p1").show(1000)
        });
    });

$(document).ready(
    function () {
        $("#btn3").click(function () {
            $("#p1").toggle(1000)
        });
    });

$(document).ready(
    function () {
        $("#p4").click(function () {
            $("#div1").slideToggle(300)
        });
    });

$(document).ready(
    function () {
        $("#btn4").click(function () {
            $("#div2").toggle(300, function () {
                setTimeout(function () {
                    alert($("#div2").text())
                }, 1000);

            })
        });
    });

