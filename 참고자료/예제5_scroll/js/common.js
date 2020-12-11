$(function(){
  /*script 영역 scroll 사용 예*/
  // console.log($(window).height())

  $(window).scroll(function(){
    var winHeight = $(window).height() - 70;
    var scTop = $(this).scrollTop();
    var navBar = $("nav");
    //실행구문
    if( scTop > winHeight ){
       //nav position fixed
       navBar.addClass("fixed");
    }else{
       //nav position absolute
       navBar.removeClass("fixed");
    }
  });
});// document ready
