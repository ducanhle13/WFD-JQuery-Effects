$(document).ready(function(){
    $("p#p-show").hide();
    $("#hide").click(function () {
        $("p#p-hide").hide();
        $("p#p-show").show();
    });
    $("#show").click(function () {
        $("p#p-hide").show();
        $("p#p-show").hide();
    });

    $("button#left").click(function () {
        $("div").animate({left: "1200px", fontSize: "60px", color: "red", backgroundColor: "yellow"}, "slow");
    });
    $("button#right").click(function () {
        $("div").animate({left: "0px", fontSize: "20px", color: "black", backgroundColor: "#98bf21"}, "slow");
    });
});