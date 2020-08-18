
jQuery(document).ready(function($) {

'use strict';
	//set your google maps parameters
	var $latitude = 33.7013661,
		$longitude = -7.3586108,
		$map_zoom = 15;

	var uluru = {lat: $latitude, lng: $longitude};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('conatiner-map'), {zoom: 15, center: uluru});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({position: uluru, map: map});

});