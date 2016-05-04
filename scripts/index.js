/**
 * Created by Auser on 2016/4/29.
 */
var n= 0, t,count,yuan;
count=$('.pic').length;
//yuan=$('.yuanquan span').length
//alert(count)
//alert($('.yuanquan span').length)
$('.pic').fadeOut().eq(n).fadeIn();
function moveAuto(){
    n=n>=(count-1)?0:++n;
    $('.pic').fadeOut().eq(n).fadeIn();
    //t=setInterval('moveAuto()',3000)
    $('.yuanquan span').removeClass('yu active-yuanquan').eq(n).addClass('active-yuanquan')
}
function dianji (){
    $('.yuanquan span').click(function(){
        n=$(this).index();
        $(this).parent().children().removeClass('yu active-yuanquan').eq($(this).index()).addClass('active-yuanquan');
        $('.pic').fadeOut().eq($(this).index()).fadeIn();
        clearInterval(t);
    })
}
$(function(){
    t=setInterval('moveAuto()',3000);
    dianji();
    $('.yuanquan').hover(function(){clearInterval(t)},function(){t=setInterval('moveAuto()',3000)})
})
$('.tanchu-bg').hover(function(){$(this).siblings('.bg').slideDown('fast')},function(){$(this).siblings('.bg').slideUp()})