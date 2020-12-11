$(function(){
  var docWidth =  $(document).width();
  function widthCalc(){
    $('html').css("font-size",docWidth/100);
  }
  widthCalc();
  $(window).resize(function(){
    docWidth =  $(this).width();
    widthCalc();
  })

/*시험 코드 입력 영역 */
var ahtml = '<label for="gnbcheck" id="mobile_close_btn"></label>';
ahtml += '<ul class="mainmenu">';
for( var i=0; i<4; i++ ){
  ahtml += '<li><a href="#">menu'+(i+1)+'</a>';
  ahtml += '<ul class="submenu">';
  for( var j=0; j<4; j++ ){
    ahtml += '<li><a href="#">submenu'+(j+1)+'</li>';
  }
  ahtml += '</ul>';
  ahtml += '</li>';
}
ahtml += '</ul>';
document.querySelector(".gnb").innerHTML = ahtml;

});
