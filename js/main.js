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


		// Bootstrap tabs anchors
		if( $('#nav-tab').length ){
			var hash = window.location.hash.substr(1);
			if( hash ){
				$('.nav-tabs a[href="#' + hash + '"]').tab('show');
			}
		}


		//Account page add new address show div
		$('#addNewAddressButton').click(function() {
			$('#addNewAddressDiv').toggle('slow', function() {});
			$('#addNewAddressButton').toggle('slow', function() {});
		});


		//Datepicker for safari
		// jQuery('input[type=date]').datepicker();

});
})(jQuery);