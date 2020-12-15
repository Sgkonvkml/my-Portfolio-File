$(function(){
  //banner swiper
  var swiper = new Swiper('.swiper-container', {
    loop: true, //infinity loop
    autoplay: { //autoplay
      delay: 4000, //기준 ms2500ms --> 2.5s
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
    }
  });
  //section swiper
  var swiper = new Swiper('.section_swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.section_swiper-pagination',
      clickable: true,
    },
  });

  //script 입력영역
  $("nav ul li a,.back_to_top a,.footer_top a,a.button").click(function(e){
    // console.log($(this.hash).offset().top);
    var thisElem = $(this.hash);
    $("html,body").stop();//a를 클릭하면 이미 실행되던 에니메이션도 정지된 상태가 되었다가 클릭한 값으로 간다.
    $("html,body").animate({scrollTop:thisElem.offset().top},1500);//scrollTop값을 가지고 움직일 수 있음 현재 body의 스크롤탑이thisElem의 top위치로 이동
    // e.preventDefault(); //지금은 필요하지 않으나 나중에 return false와 함께 써야 할 수 있음
    return false;
  });

  /*scroll 상단 이동 버튼 노출영역 제어*/ //scroll이 생기는 것과 같이 나오게
  $(window).scroll(function(){
    if( $(this).scrollTop() == 0 ){
      $(".back_to_top").removeClass("on");
    }else{
      $(".back_to_top").addClass("on");
    }
  });

  /*section offset top값으로 class추가*/
  var wHeight = $(window).height();
  $(window).scroll(function(){
    var thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      var thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop + 150 && thisScrollTop <= thisOffset.top + wHeight){
        $(this).addClass("active");
      }
    });
  });

});//end
