"use strict";







//function that initiating template plugins on document.ready event
function documentReadyInit() {
	///////////
	//Plugins//
	///////////
	//contact form processing
	jQuery('form.contact-form').on('submit', function( e ){
		e.preventDefault();
		var $form = jQuery(this);
		jQuery($form).find('span.contact-form-respond').remove();
			//checking on empty values
			jQuery($form).find('[aria-required="true"], [required]').each(function(index) {
				if (!jQuery(this).val().length) {
					jQuery(this).addClass('invalid').on('focus', function(){jQuery(this).removeClass('invalid')});
				}
			});
			//if one of form fields is empty - exit
			if ($form.find('[aria-required="true"], [required]').hasClass('invalid')) {
				return;
			}
			
			//sending form data to PHP server if fields are not empty
			var request = $form.serialize();
			var ajax = jQuery.post( "contact-form.php", request )
			.done(function( data ) {
					jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">'+data+'</span>');
			})
			.fail(function( data ) {
					jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">Mail cannot be sent. You need PHP server to send mail.</span>');
			})
	});
	
	//search modal
	jQuery(".search_modal_button").on('click', function(e){
		e.preventDefault();
		jQuery('#search_modal').modal('show').find('input').first().focus();
	});

	//search form processing
	jQuery('form.searchform').on('submit', function( e ){
		e.preventDefault();
		var $form = jQuery(this);
		var $searchModal = jQuery('#search_modal');
		$searchModal.find('div.searchform-respond').remove();
		
		//checking on empty values
		jQuery($form).find('[type="text"]').each(function(index) {
			if (!jQuery(this).val().length) {
				jQuery(this).addClass('invalid').on('focus', function(){jQuery(this).removeClass('invalid')});
			}
		});
		
		//if one of form fields is empty - exit
		if ($form.find('[type="text"]').hasClass('invalid')) {
			return;
		}
		$searchModal.modal('show');
		
		//sending form data to PHP server if fields are not empty
		var request = $form.serialize();
		var ajax = jQuery.post( "search.php", request )
		.done(function( data ) {
			$searchModal.append('<div class="searchform-respond">'+data+'</div>');
		})
		.fail(function( data ) {
			$searchModal.append('<div class="searchform-respond">Search cannot be done. You need PHP server to search.</div>');
		})
	});

	//mailchimp subscribe form processing
	jQuery('.signup').on('submit', function( e ) {
		e.preventDefault();
		var $form = jQuery(this);
		// update user interface
		$form.find('.response').html('Adding email address...');
		// Prepare query string and send AJAX request
		jQuery.ajax({
			url: 'mailchimp/store-address.php',
			data: 'ajax=true&email=' + escape($form.find('.mailchimp_email').val()),
			success: function(msg) {
				$form.find('.response').html(msg);
			}
		});
	});

	//twitter
	if (jQuery().tweet) {
		jQuery('.twitter').tweet({
			modpath: "./twitter/",
			count: 2,
			avatar_size: 48,
			loading_text: 'loading twitter feed...',
			join_text: 'auto',
			username: 'ThemeForest', 
			template: "{avatar}<div class=\"tweet_right\">{time}{join}<span class=\"tweet_text\">{tweet_text}</span></div>"
		});
	}
	
	//mainmenu
	if (jQuery().superfish) {
		jQuery('ul.sf-menu').superfish({
			delay:       300,
			animation:   {opacity:'show'},
			animationOut: {opacity: 'hide'},
			speed:       'fast',
			disableHI:   false,
			cssArrows:   true,
			autoArrows:  true
		});
	}

	//toggle mobile menu
	jQuery('.toggle_menu').on('click', function(){
		jQuery('.toggle_menu').toggleClass('mobile-active');
		jQuery('.page_header').toggleClass('mobile-active');
	});

	jQuery('.mainmenu a').on('click', function(){
		if (!jQuery(this).hasClass('sf-with-ul')) {
			jQuery('.toggle_menu').toggleClass('mobile-active');
			jQuery('.page_header').toggleClass('mobile-active');
		}
	});

	//single page localscroll and scrollspy
	var navHeight = jQuery('.page_header').outerHeight(true);
	jQuery('body').scrollspy({
		target: '.mainmenu_wrapper',
		offset: navHeight
	});
	if (jQuery().localScroll) {
		jQuery('.mainmenu, #land').localScroll({
			duration:900,
			easing:'easeInOutQuart',
			offset: -navHeight+10
		});
	}

	//toTop
	if (jQuery().UItoTop) {
		jQuery().UItoTop({ easingType: 'easeOutQuart' });
	}

	//parallax
	if (jQuery().parallax) {
		jQuery('.parallax').parallax("50%", 0.01);
	}

	//prettyPhoto
	if (jQuery().prettyPhoto) {
		jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			hook: 'data-gal',
			theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
		});
	}
	

	


	

	

	
	

	
	
	
}//eof documentReadyInit

//function that initiating template plugins on window.load event
function windowLoadInit() {
	//gallery grid
	// blogGrid();




	//tooltip
	if (jQuery().tooltip) {
		jQuery('[data-toggle="tooltip"]').tooltip();
	}



	

	

	
	jQuery('body').scrollspy('refresh');
	

	

	//video images preview
	
}//eof windowLoadInit

jQuery(document).ready(function() {
	documentReadyInit();
	
	// The slider being synced must be initialized first
	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		itemMargin: 5,
		asNavFor: '#slider'
	});
 
	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	});
	
	jQuery('.page-breadcrumbs__title').each(function () {
		this.innerHTML = this.innerHTML.replace( /^(.+?\s)/, '<span>$1</span>' );
	});

	$("#gallery_item-carousel").owlCarousel({
		items : 4,
		nav: true,
		dots: false,
		margin:30,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	$("#gallery_blog-carousel").owlCarousel({
		items : 4,
		nav: true,
		dots: false,
		margin:30,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	
}); //end of "document ready" event

jQuery(window).load(function(){
	windowLoadInit();
	
	$('.works-flexslider').flexslider({
		animation: "fade",
		slideshow: "false",
		controlNav: "thumbnails"
	});
	
	
	$("#owl-type-1").owlCarousel({
		items : 5,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:6
			}
		},
		
		nav : true,
		navigationText : ["prev","next"],
		dots: false,
		rewindNav : false,
		scrollPerPage : false,
		
		pagination : false,
		paginationNumbers: false,
	});
	
	
	
	
	
}); //end of "window load" event

jQuery(window).resize(function(){
	// blogGrid();
	jQuery('body').scrollspy('refresh');
	
	//header processing
	var $header = jQuery('.page_header').first();
		//checking document scrolling position
	if ($header.length && !jQuery(document).scrollTop() && $header.first().data('bs.affix')) {
		$header.first().data('bs.affix').options.offset.top = $header.offset().top;
	}
	jQuery(".page_header_wrapper").css({height: $header.first().outerHeight()}); //editing header wrapper height for smooth stick and unstick
});

