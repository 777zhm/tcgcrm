(function($) {
	$(document).ready(function() {

		// sidebar
		$('#sidebarCollapse').on('click', function() {
			$('#sidebar').toggleClass('active');
		});


		// stars rating
		$('.star.rating').click(function() {
			console.log($(this).parent().data('stars') + ", " + $(this).data('rating'));
			$(this).parent().attr('data-stars', $(this).data('rating'));
		});

		// Bootstrap tabs on account page
		$('#myTab a').on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
		});

	});
})(jQuery);