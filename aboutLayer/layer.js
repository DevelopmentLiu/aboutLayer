/**
 * Created by john on 2018/11/21.
 */
window.onload = function(){
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

    /*var swiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
       /!* loop: false, // 循环模式选项*!/
            setWrapperSize :true,
            slidesPerView: 'auto',
             pagination: {
                el: '.swiper-pagination',
            },
    })*/
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            observer: true,
            observerParents: true,
        },
    });

};

//查看弹框分页
$(".alterBox").click(function () {
    $(".swiperBoxBk").show();
    $(".swiper-container").css("z-index",30);
});

$(".swiperBoxBk").click(function () {
    $(this).hide();
    $(".swiper-container").css("z-index",-1);
});