/// <reference path="C:\Users\z\Documents\Visual Studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.2.3.js" />


$(document).ready(function () {
    $(window).on("load", function () {
        var dataimg = {
            "data": [{ "src": "./img/2.jpg" }, { "src": "./img/3.jpg" }, { "src": "./img/4.jpg" }, { "src": "./img/5.jpg" }, { "src": "./img/6.jpg" },
            { "src": "./img/7.jpg" }, { "src": "./img/8.jpg" }, { "src": "./img/9.jpg" }, { "src": "./img/10.jpg" }, { "src": "./img/1.jpg" }]
        };
        window.onscroll = function () {
            if (scroll()) {
                $.each(dataimg.data, function (index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    console.log($(value).attr("src"));
                    $("<img>").attr("src", $(value).attr("src")).appendTo(content);
                });
                ImgLoad();
            }
        };
    });
});


function scroll() {
    var box = $(".box");
    var lastboxheight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var containerheight = $(document).width();
    var scrollheight = $(window).scrollTop();
    return (lastboxheight < containerheight + scrollheight) ? true : false;

    //var box = $(".box");
    //var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    //var documentHeight = $(document).width();
    //var scrollHeight = $(window).scrollTop();
    //return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
};


function ImgLoad() {
    var box = $(".box");
    var boxwidth = box.eq(0).width();
    var num = Math.floor($(".container").width() / boxwidth);
    var boxArr = [];
    box.each(function (index, element) {
        //console.log(index + "-----" + element);
        var boxheight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxheight;
            //console.log(boxArr[index]);
        }
        else {
            var minboxheight = Math.min.apply(null, boxArr);
            //console.log(minboxheight);
            var minboxIndex = $.inArray(minboxheight, boxArr);
            //console.log(minboxIndex);
            //console.log(element);
            $(element).css({
                "position": "absolute",
                "top": minboxheight + 113,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }

    });
};