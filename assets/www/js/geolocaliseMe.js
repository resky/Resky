function geolocaliseMe() /*http://docs.phonegap.com/en/2.3.0/cordova_geolocation_geolocation.md.html#PositionError*/{
	console.log('in GeolocalseMe.js');
	console.log('in onDeviceReady');
	var element = document.getElementById('geolocation');
	/*element.innerHTML = 'Finding geolocation...';*/
	console.log('Finding geolocation...');
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
	console.log('in onSuccess');
		$.post("http://localhost/orig/Resky/ReskyServer/genjson.php", { long: position.coords.latitude, lat: position.coords.latitude, control: "true" })
			.done(function(data) {
				console.log("in ajax : onSuccess");
				alert("Data Loaded: " + data);
		});
		/*$.ajax({
                dataType : "json",
                url : "http://localhost/orig/ReskyServer/genjson.php",
                data : "action=POST&long=1243.213&lat=1243.21&control=false",
                success : function( returned ){
                		console.log ('ajax: success')
                        console.log ( returned );
        				}
        });*/
    /*var element = document.getElementById('geolocation');
	element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        
                        'Altitude: '           + position.coords.altitude              + '<br />' +
                        'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                        'Heading: '            + position.coords.heading               + '<br />' +
                        'Speed: '              + position.coords.speed                 + '<br />' +
                        'Timestamp: '          +                                   position.timestamp          + '<br />';*/
}

// onError Callback receives a PositionError object
//
function onError(error) {
	console.log('in onError');
    alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
}
