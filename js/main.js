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

		//Account page add new address show div
		$('#addNewAddressButton').click(function() {
			$('#addNewAddressDiv').toggle('slow', function() {});
			$('#addNewAddressButton').toggle('slow', function() {});
		});

	});
})(jQuery);