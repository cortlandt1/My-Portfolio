$(window).scroll(function (){
  var scroll = $(window).scrollTop();

  if (scroll >= 745) {
     console.log('It worked!')
    $('.block__nav').addClass("block__nav__dark" )
    $('.block__nav__links').addClass("block__nav__links__dark" )
  } else if (scroll <=744) {
    $('.block__nav').removeClass("block__nav__dark")
    $('.block__nav__links').removeClass("block__nav__links__dark" )
  }
})

$(window).load(function() {
    $("body").removeClass("preload");
  });
