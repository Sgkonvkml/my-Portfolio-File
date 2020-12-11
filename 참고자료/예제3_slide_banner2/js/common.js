$(function(){
  /*script 영역 slide banner 만들기 예1*/
  const widthNum = 620;//slide 각각의 너비, carousel_inner의 너비를 계산할 수 있다.

  //ul의 개수 가져오기
  var ulLeng = $("#carousel_inner ul.column").length;

  /*ul을 오른쪽 정렬*/
  $("#carousel_inner").css("width", widthNum*ulLeng + "px");

  /*슬라이드 포지션 초기화*/
  $("#carousel_inner ul.column:last").prependTo("#carousel_inner");
  $("#carousel_inner").css("margin-left","-"+widthNum+"px");

  /* prev button script*/
  $("#carousel_prev").click(function(){
    var caInMarginLeft = $("#carousel_inner").css("margin-left");
    console.log(parseInt(caInMarginLeft));
    $("#carousel_prev,#carousel_next").hide();
    $("#carousel_inner").animate({ marginLeft : parseInt(caInMarginLeft) + widthNum + "px" },"slow","swing",function(){
        /*animation 실행이 끝난 후 실행 영역*/
        $("#carousel_inner").css("margin-left","-"+widthNum+"px");
        $("#carousel_inner ul.column:last").prependTo("#carousel_inner");
        $("#carousel_prev,#carousel_next").show();
    });
  });

  /* next button script*/
  $("#carousel_next").click(function(){
    var caInMarginLeft = $("#carousel_inner").css("margin-left");
    console.log(parseInt(caInMarginLeft));
    $("#carousel_prev,#carousel_next").hide();
    $("#carousel_inner").animate({ marginLeft : parseInt(caInMarginLeft) - widthNum + "px" },"slow","swing",function(){
        /*animation 실행이 끝난 후 실행 영역*/
        $("#carousel_inner").css("margin-left","-"+widthNum+"px");
        $("#carousel_inner ul.column:first").appendTo("#carousel_inner");
        $("#carousel_prev,#carousel_next").show();
    });
  });

  /*auto slide*/
  var timerID = setInterval(function(){
    $("#carousel_next").click();
  },5000);

  $("#carousel_prev img,#carousel_next img").mouseenter(function(){
    /*stop auto slide*/
    clearInterval(timerID);
  }).mouseleave(function(){
    /*start auto slide*/
    timerID = setInterval(function(){
      $("#carousel_next").click();
    },5000);
  });

});// document ready
