document.querySelector(".js-go").addEventListener('click', function() {
	//avar inputValue = document.querySelector('.js-userinput').value;

	var userInput = getUserInput();
	searchGiphy( userInput );

});

document.querySelector('.js-userinput').addEventListener('keyup', function (e) {
	
	if (e.which === 13) {
 		var userInput = getUserInput();
 		searchGiphy( userInput );
	
		 
    }
	//alert('Button was clicked!');
});

function getUserInput() {
	var inputValue = document.querySelector('.js-userinput').value;
	return inputValue;
}
// $(window).load(function() {
// 	// Animate loader off screen
// 	$(".se-pre-con").fadeOut("slow");;
// });

function searchGiphy( searchQuery ) {
	var e=document.getElementById("loading");
	e.classList.remove('hide');
	var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;
	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function( data ) {
		 e.classList.add('hide');
			var actualData = data.target.response;
			pushToDOM(actualData);
			console.log(actualData);
		
	});

}
function myFunction() {
	$(window).on("load",function(){
		$(".loader-wrapper").fadeOut("slow");
   })
   jQuery(".submit-btn span").html('<i class="fa fa-refresh fa-lg fa-spin" style="color: #ffffff;"></i>');
    alert('Button was clicked!');
  }

function pushToDOM( response ) {
	response = JSON.parse( response );
	var images = response.data;
	var container = document.querySelector('.js-container');
	container.innerHTML = "";

	// function two() {
	// 	for (i = 0; i < elements.length; i++) {
	// 	  elements[i].style.msFlex = "50%";  // IE10
	// 	  elements[i].style.flex = "50%";
	// 	}
	// //   }
	// function loadImage() {
	// 	alert("Image is loaded");
	//   }
	
	images.forEach(function(image){
		var src = image.images.fixed_width.url;
		
		container.innerHTML += "<img src='"+ src +"' class='container-image' class='centre' />";
	});
}