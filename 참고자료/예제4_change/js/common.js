$(function(){
  /*script 영역 change 사용 예*/
  $("select").change(function(){
    var thisVal = $(this).val();//현재 선택된 select box option의 value 값
    // $("input").val(thisVal);
    $(this).next().find("input").val(thisVal);
  });

  $("input.inputest").change(function(){
    alert("input text 가"+$(this).val()+"로 변경되었습니다.");
  });

});// document ready
