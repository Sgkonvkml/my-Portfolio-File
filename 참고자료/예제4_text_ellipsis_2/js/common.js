$(function(){
  /*script 영역 text ellpisis 사용 예*/
  var elem = $(".more_text");
  var showText = 98;
  var moreBtnText = "Show More";
  var lessBtnText = "Show Less";

  // elem = document.body.getElementsByClassName('more_text');
  // for (var i = 0; i < elem.length; i++ ){
  //   var content = elem[i].html();
  // } // 아래 each method와 같은 구문
  elem.each(function(){
    //실행문
    var content = $(this).html();
    var contentLeng = content.length;
    // console.log(contentLeng);
    var lessText = content.substr(0,showText); // 화면이 줄어들때 보여지는 텍스트
    var moreText = content.substr(showText,contentLeng); //화면이 줄어들때 잘린 텍스트
    console.log(moreText);
    var changeHtml = '';
    if( showText < contentLeng ){
      changeHtml = lessText + "<span>...</span><span class='more_content'><span>" + moreText + "</span><a href='#' class='more_btn less'><span>"+moreBtnText+"</span></a></span>"
      $(this).html(changeHtml);
    }
  })


  $(".more_btn").click(function(){
    //click 시 실행문
    console.log($(this).hasClass("less"));
    if( $(this).hasClass("less") ){
      $(this).removeClass("less");
      $(this).html("<span>"+lessBtnText+"</span>");
    }else{
      $(this).addClass("less");
      $(this).html("<span>"+moreBtnText+"</span>");
    }
    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    // console.log($(this).parent().prev())
  });

});// document ready
