/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication2\Scripts/jquery-2.2.3.js" />


$(document).ready(function () {
    $("div").click(function () {
        $("div").toggleClass("div2")
    })
});

$(document).ready(function () {
    $("#btn").click(function () {
        $("div").css(
            {
            width: "100px",
            height: "100px",
            backgroundColor: "#000000"
            }
        )
    })
});
