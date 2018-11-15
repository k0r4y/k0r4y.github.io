/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Price calculation
// stap1= Number(document.querySelector('input[name="stap1"]:checked').value);
// stap2= Number(document.querySelector('input[name="stap2"]:checked').value);
// stap3 = 50;
// stappentotaal = stap1+stap2+stap3;

// $(function() {
// 	$(".tooltip").tooltip();
// 	var content = $( ".tooltip" ).tooltip( "option", "content" );
// });

$(document).ready(function() {
	$(document).tooltip();
  });


$(function() {
	$( ".draggable" ).draggable();
 });

function updateTotaal(){
	stap1= Number(document.querySelector('input[name="stap1"]:checked').value);
	stap2= Number(document.querySelector('input[name="stap2"]:checked').value);
	stap3 = 50;
	stappentotaal = stap1+stap2+stap3;

	if (document.querySelector('input[name="stap1"]:checked').value == 50 ){
		document.getElementById('optie1').innerHTML = "- 1 tot 100 (€50,-)";
		
	} else if (document.querySelector('input[name="stap1"]:checked').value == 100) {
		document.getElementById('optie1').innerHTML = "- 101 tot 300 (€100,-)";
	} else {
		document.getElementById('optie1').innerHTML = "- 301 tot 500 (€150,-)"
	}
	if (document.querySelector('input[name="stap2"]:checked').value == 50 ){
		document.getElementById('optie2').innerHTML = "- eenmanszaak of vof (€50,-)";
	} else if(document.querySelector('input[name="stap2"]:checked').value == 100 ){
		document.getElementById('optie2').innerHTML = "- bv of nv (€100,-)";
	} else {
		document.getElementById('optie2').innerHTML = "- anders (€150,-)";
	}

}


function stap1Radio (){
	stap1= Number(document.querySelector('input[name="stap1"]:checked').value);
	stap2= Number(document.querySelector('input[name="stap2"]:checked').value);
	stap3 = 50;
	stappentotaal = stap1+stap2+stap3;

	// if (stap2 = null){
	// 	Number(document.querySelector('input[name="stap2"]:checked').value);

	// } else {
	// 	// stap2 = stap2;
	// }
	window.stap1 = Number(document.querySelector('input[name="stap1"]:checked').value);
	document.getElementById("vragenlijst-totaal").innerHTML = "€" + (stap1 + stap2) +",-";

		// if (document.querySelector('input[name="stap1"]:checked').value == a ) {

		// };
	updateTotaal();
	};


function stap2Radio (){
	stap1= Number(document.querySelector('input[name="stap1"]:checked').value);
	stap2= Number(document.querySelector('input[name="stap2"]:checked').value);
	stap3 = 50;
	stappentotaal = stap1+stap2+stap3;

	// if (stap1 = null){
	// 	Number(document.querySelector('input[name="stap1"]:checked').value);

	// } else {
	// 	stap1 = stap1;
	// }
	window.stap2 = Number(document.querySelector('input[name="stap2"]:checked').value);
	document.getElementById("vragenlijst-totaal").innerHTML = "€" + (stap1 + stap2) +",-";
	updateTotaal();
}

// function berekenPrijs(){
// 	var x = document.getElementById("berekenprijs").value;
// 	var 
// 	var stap2 = 0;
// 	var stap3 = 0;
	
// 	var x = stap1 + stap2 + stap3;

//     document.getElementById("vragenlijst-totaal").innerHTML = x;
// }

// Contact-form

function showDiv() {
	document.getElementsByClassName("contact-form")[0].style.display = "block";
 }


// When the user clicks on <span> (x), close the modal
function closeDiv() {
	document.getElementsByClassName("contact-form")[0].style.display = "none";
}


var modal = document.getElementById('ContactForm');

window.addEventListener("click", function(event) {

	//alert(event.target)
	  if (event.target == modal) {
		  modal.style.display = "none";
	  } 
  });
//


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);