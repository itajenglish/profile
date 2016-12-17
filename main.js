jQuery(document).ready(function($) {
    var navigationItems = $('.jumbotron .navbar .nav > li a');

    updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

    //Smooth scroll to the section//
    navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });
})


