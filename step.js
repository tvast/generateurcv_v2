var i=1;
var g=0;
var p = 0;
var t = 0;

function progressBar() {
	x= i++*10;
	document.getElementById("progressbar").style.width= x+"%";
	console.log(x);
}

function switchQh () {
	
	if (g == 0) {
		var f = g++;
		console.log(f+"init");

		
		document.getElementById(g).classList.toggle("toggleCv");
		document.getElementById(f).classList.toggle("toggleCv");
	}
	else {
		var p = g++;
		var t = p-1;
	/*	console.log(p+"+1");
		console.log(t+"-1");
		console.log(g+"zini");*/
		
		document.getElementById(t).classList.toggle("toggleCv");
		document.getElementById(p).classList.toggle("toggleCv");
	};
}


/*function toggle() {

$( "numero prescedent" ).toggleClass( numero suivant, addOrRemove );
i++
$(progressbar).style.widt= 100/arraylength
}

function progressBar () {
	$( "no,bouton" ).click(function() {
  $( "progressbar" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});
}*/

