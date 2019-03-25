$ (function(){
  $("#light").click(function(){
    $("body").removeClass("black-background");
    $("body").addClass("grey-background");
      $(".text").removeClass("white-text");
    $(".text").addClass("black-text");

  });
  $("#dark").click(function(){
    $("body").removeClass("grey-background");
    $("body").addClass("black-background");
      $(".text").removeClass("black-text");
      $(".text").addClass("white-text");

  });


});
