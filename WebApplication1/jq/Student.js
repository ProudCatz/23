/// <reference path="C:\Users\z\documents\visual studio 2015\Projects\WebApplication2\WebApplication1\Scripts/jquery-2.0.0.js" />
/// <reference path="IdCard.js" />

//提交
$(document).ready(function () {
    $("#btn").click(function () {
        $("input").each(function () {
            if ($(this).attr("id") != "Address") {
                if ($(this).val().length == 0) {
                    $(this).parents("div .form-group").addClass("has-error");
                    $(this).parent().find("span").html("必填").addClass("alert-danger");
                }
            }
        });
        $("input").each(function () {
            if ($(this).parents("div .form-group").attr("class") == "form-group has-error") {
                return false;
            }
            else {
                var ss = {
                    Email: $("#Email").val(),
                    Password: $("#Password").val(),
                    Name: $("#Name").val(),
                    Tel: $("#Tel").val(),
                    Address: $("#Address").val(),
                    IdCard: $("#IdCard").val()
                };
                $.post("Student/AddStudent", ss, function (text) {
                    if (text == "true") {
                        alert("添加成功");
                    }
                    else {
                        alert("添加失败");
                    }
                });
            } return false;
        });
    });
});


//效果
function cssclass(span, input, type, textname, textnum) {
    span.hide();
    if (type == 0) {
        span.addClass("alert-danger").html(textname + "的长度应大于等于" + textnum + "位!").show();
        input.parents("div .form-group").addClass("has-error");
    }
    else if (type == 1) {
        span.removeClass("alert-danger").html("");
        input.parents("div .form-group").removeClass("has-error");
        span.addClass("alert-success").html(textname + "通过").show(100);
    }
    else if (type == 2) {
        span.addClass("alert-danger").html(textname + "不能为空!").show(100);
        input.parents("div .form-group").addClass("has-error");
    }
    else {
        span.removeClass("alert-success").html("").hide();
    }
}

//密码
$(document).ready(function () {
    var input = $("#Password");
    var span = $("#spPassword");
    var textname = "密码";
    var textnum = 6;
    input.keyup(function () {
        if (input.val().length < 6) {
            cssclass(span, input, 0, textname, textnum)
        }
        else {
            cssclass(span, input, 1, textname, textnum)
        }
    });
    input.blur(function () {
        if (input.val().length >= 6) {
            cssclass(span, input, 3, textname, textnum)
        }
        if (input.val().length == 0) {
            cssclass(span, input, 2, textname, textnum)
        }
    });
});

//Email
$(document).ready(function () {
    var input = $("#Email");
    var span = $("#spEmail");
    var textname = "邮箱";
    var textnum = null;
    var reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
    input.keyup(function () {
        if (!reg.test(input.val())) {
            span.addClass("alert-danger").html("请输入有效的邮箱地址!").show();
            input.parents("div .form-group").addClass("has-error");
        }
        else {
            cssclass(span, input, 1, textname, textnum)
        }
    });
    input.blur(function () {
        if (reg.test(input.val())) {
            cssclass(span, input, 3, textname, textnum)
        }
        if (input.val().length == 0) {
            cssclass(span, input, 2, textname, textnum)
        }
    });
});

//Tel
$(document).ready(function () {
    var input = $("#Tel");
    var span = $("#spTel");
    var textname = "电话";
    var textnum = null;
    input.keyup(function () {
        if (input.val().length != 11) {
            span.addClass("alert-danger").html("请输入有效的手机号码!").show();
            input.parents("div .form-group").addClass("has-error");
        }
        else {
            cssclass(span, input, 1, textname, textnum)
        }
    });
    input.blur(function () {
        if (input.val().length == 11) {
            cssclass(span, input, 3, textname, textnum)
        }
        if (input.val().length == 0) {
            cssclass(span, input, 2, textname, textnum)
        }
    });
});

//Name
$(document).ready(function () {
    var input = $("#Name");
    var span = $("#spName");
    var textname = "姓名";
    var textnum = 20;
    input.keyup(function () {
        if (input.val().length > 20) {
            span.addClass("alert-danger").html("姓名最长为20位字符!").show();
            input.parents("div .form-group").addClass("has-error");
        }
        else if (input.val().length < 1) {
            cssclass(span, input, 2, textname, textnum)
        }
        else {
            cssclass(span, input, 1, textname, textnum)
        }
    });
    input.blur(function () {
        if (input.val().length <= 20) {
            cssclass(span, input, 3, textname, textnum)
        }
        if (input.val().length == 0) {
            cssclass(span, input, 2, textname, textnum)
        }
    });
});

//IdCard 
$(document).ready(function () {
    var input = $("#IdCard");
    var span = $("#spIdCard");
    var textname = "身份证号码";
    var textnum = null;
    input.keyup(function () {
        if (!IdCardValidate(input.val())) {
            span.addClass("alert-danger").html("请输入有效的身份证号码!").show();
            input.parents("div .form-group").addClass("has-error");
        }
        else {
            cssclass(span, input, 1, textname, textnum)
        }
    });
    input.blur(function () {
        if (IdCardValidate(input.val())) {
            cssclass(span, input, 3, textname, textnum)
        }
        if (input.val().length == 0) {
            cssclass(span, input, 2, textname, textnum)
        }
    });
});

//Address
$(document).ready(function () {
    var input = $("#Address");
    var span = $("#spAddress");
    var textname = "地址";
    var textnum = 200;
    input.keyup(function () {
        if (input.val().length > 200) {
            span.addClass("alert-danger").html("地址最大长度为200字符!").show();
            input.parents("div .form-group").removeClass("has-error");
        }
        else {
            span.removeClass("alert-danger").html("");
        }
    });
});
