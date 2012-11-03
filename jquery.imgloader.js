//appends pre-loading divs to a container element
//inserts a new image to the container
//default to a backup image if the image doesnt load

(function( $ ){

	$.fn.imgLoader = function( desiredImg, backupImg/*, height, width */ )
	{
		var that = this,
			height = this.height(),
			width = this.width();
		
		//empty the containing element
		this.empty();
		
		//create the preloader 
		var $loadOverlay = 
		$( '<div>' ).addClass( 'loadOverlay' )
		.hide()
		.append(
			$( '<div>' ).addClass( 'loadOverlayContent' )
			.append(
				$( '<div>' ).addClass( 'loadAnimate' )
			)
		);
		
		//create the img element 
		var $img = $( '<img>' );
		
		//append overlay
		$loadOverlay.appendTo( this );

		//append image
		//potentially append once fade in is complete
		$img.appendTo( that );
		
		//fadeIn
		$loadOverlay.fadeIn( 'slow', function()
		{ 
			
			$img
			.attr( 'src', desiredImg )
			.each(function() {
				if( this.complete )
				{
					//if the image was cached, fadeOut straight away
					$loadOverlay.fadeOut();
				}
				else
				{
					$(this).load( function()
					{
						//if the image was not cached, when the image loads, fadeOut
						$(this).data( 'loadAttempted', true );
						$loadOverlay.fadeOut();
					} )
				}
			} )
			.error( function() { if(!$(this).data('loadAttempted')){ $(this).attr( 'src', backupImg ); $loadOverlay.fadeOut(); $(this).data( 'loadAttempted', true ) } } );
		} );
		
		
	};
})( jQuery );