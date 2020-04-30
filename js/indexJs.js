window.onload = function () {
    navDetailsAnimation();
    slideShow()

}


//nav animation
function navDetailsAnimation() {
    $("#headNav li").mouseover( function () {
        $("#navDetailsBox").slideDown(500);
    });
    $("#navDetailsBox").mouseleave( function () {
        $("#navDetailsBox").slideUp(200);
    });

    //商品列表

    $("#siteCategory ul").mouseover(function () {
        $("#commodityList").show();
    });
    $("#siteCategory").mouseleave(function () {
        $("#commodityList").hide();
    })
}

//轮播图
function slideShow() {

    //初始化
    $("#slideShowImages img").eq(0).css("display","inline").addClass("slideShow");
    $(".slideLength").eq(0).css("background","gray");

    var a = 0;

    //自动轮播
    var time1 = setInterval(
        function () {
            a++;
            if (a == Number($("#slideShowImages img").length)){
                a = 0;
            }
            slideHideShow();
        }
        ,3000);

    //点击事件
        $("#leftButton").click(function () {
            clearInterval(time1);
           if(a==0){
               a = Number($("#slideShowImages img").length)-1;
           }
           else {
               a--;
           }
           slideHideShow();
           setTimeout(time1 = setInterval(
               function () {
                   a++;
                   if (a == Number($("#slideShowImages img").length)){
                       a = 0;
                   }
                   slideHideShow();
               }
               ,3000),3000);
        });
        $("#rightButton").click(function () {
            clearInterval(time1);
            if(a == Number($("#slideShowImages img").length)-1){
                a = 0;
            }
            else {
                a++;
            }
            slideHideShow();
            setTimeout(time1 = setInterval(
                function () {
                    a++;
                    if (a == Number($("#slideShowImages img").length)){
                        a = 0;
                    }
                    slideHideShow();
                }
                ,3000),3000);

        });


        //执行动画效果
    function slideHideShow() {
        $("#slideShowImages img").hide().removeClass("slideShow").eq(a).addClass("slideShow").fadeIn("slow");
        $(".slideLength").css("background","rgba(255, 255, 255, 0.34)").eq(a).css("background","gray");
    }

    $(".slideLength").click(

    )

}




