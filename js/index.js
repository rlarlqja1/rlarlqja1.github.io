$(".menu>li").mouseover(function(){
    $("#back").show();
    $(".submenu").stop().slideDown();
});

$(".menu>li").mouseleave(function(){
    $("#back").hide();
    $(".submenu").stop().slideUp();
});