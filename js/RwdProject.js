$(document).ready(function() {
    $('.tofeature').click(function() {
        $('html, body').animate({
            scrollTop: $(".feature").offset().top
        }, 700);
    });

    $('.tochef').click(function(event) {
        $('html,body').animate({
            scrollTop: $('.chef').offset().top
        }, 700);
    });

    $('.tomap').click(function(event) {
        $('html,body').animate({ 
        	scrollTop: $('.map').offset().top }, 700);
    });

    $('.toline').click(function(event) {
        $('html,body').animate({ 
        	scrollTop: $('.footer').offset().top }, 700);
    });

	  $('.burgermenu').on('click', function(e) {
    $(this).find('i').toggleClass('fa-times');
      e.preventDefault();
    $('body').toggleClass('menu-show');
  });

      $('.addlove').hover(function(){
    $(this).find('i').attr('class','fas fa-heart');
    },function(){
    $(this).find('i').attr('class','far fa-heart');
  });
	});