
/* 네비 */ 
$('#mainNav > ul > li').mouseover(function(){
   $(this).find('.mainSubNav').stop().slideDown(300);
});
$('#mainNav > ul > li').mouseleave(function(){
   $(this).find('.mainSubNav').stop().slideUp(300);
});


/* 이미지 슬라이드 플러그인 */
$('.slideWrap').slick({
   dots: true,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: true,
});

/* 탭메뉴 */
var tabBtn = $('.community > ul > li');

tabBtn.mouseover(function(){
   var target = $(this);
   var index = target.index();
   tabBtn.removeClass('active');
   target.addClass('active')
   switch(index){
      case 0 : 
         $('.community > .newsTap').css('display', 'block');
         $('.community > .mediaTap').css('display', 'none');
         $('.community > .recruitTap').css('display', 'none');
         break;
      case 1 :
         $('.community > .newsTap').css('display', 'none');
         $('.community > .mediaTap').css('display', 'block');
         $('.community > .recruitTap').css('display', 'none');
         break;
      case 2 :
         $('.community > .newsTap').css('display', 'none');
         $('.community > .mediaTap').css('display', 'none');
         $('.community > .recruitTap').css('display', 'block');
         break;
   }
});