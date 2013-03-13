var fixgeometry = function() {/*http://www.semicomplete.com/blog/geekery/jquery-mobile-full-height-content.html*/
	  				  $("#app").css("visibility","hidden");
	  				  console.log('fixgeo hidden')
					  /* Some orientation changes leave the scroll position at something
					   * that isn't 0,0. This is annoying for user experience. */
					  scroll(0, 0);
				
					  /* Calculate the geometry that our content area should take */
					  var header = $(".header:visible");
					  var footer = $(".footer:visible");
					  var content = $(".content:visible");
					  var viewport_height = $(window).height();
					  
					  console.log(content_height+' content_height');
					  console.log(viewport_height+' viewport_height');
					  console.log(header.outerHeight()+' header.outerHeight');
					  console.log(footer.outerHeight()+' footer.outerHeight');
					  
					  var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
					  
					  
					  /* Trim margin/border/padding height */
					  content_height -= (content.outerHeight() - content.height());
					  content.height(content_height);
					  
					  /*Custom code : set map size and load map*/						  
					  $("#map").css("height",content_height);
				
					  $( "#map" ).geomap({
						center: [ 6.630439, 46.520176 ],
						zoom:14,	
						loadstart: function( e, geo ) { /*http://docs.jquerygeo.com/geomap/geomaploadstart.html*/
						  $.mobile.showPageLoadingMsg("a", "Loading map...");
						},
						loadend: function( e, geo ) { /*http://docs.jquerygeo.com/geomap/geomaploadend.html*/
							$.mobile.hidePageLoadingMsg();
							
						}
					  });
				   
				   /*Custom code : show app*/
				  	/*document.getElementById("app").style.visibility = "visible";*/
					$(".app").css("visibility","visible");
				  	document.getElementById("app").style.display = 'block';
				
				}; 