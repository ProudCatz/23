/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication2\Scripts/jquery-2.2.3.js" />


$(document).ready(
    function () {
        $("#btn1").click(
            function () {
                alert($("p").text());
            });

    });
$(document).ready(
function () {
    $("#btn2").click(
        function () {
            alert($("#p1,#p2").text());
        }
    )
});