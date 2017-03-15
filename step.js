var i=1;
var g=1;
var p = 0;
var t = 0;

function progressBar() {

	/*calcul % avance form*/

	var x = document.getElementById("frm1");
	var h = x.length;
	var foo = 100/h;
	var j = h+1;
	
	document.getElementById("progressbar").style.width= foo*g+"%";

	/*switch de question*/

	if (g == 0) {
		var f = g++;
		console.log(f+"init");

		
		document.getElementById(g).classList.add("toggleCv")

		document.getElementById(f).classList.add("toggledCv");
	}
	
	else {
		var p = g++;
		console.log(p+"total");
		var t = p-1;
		document.getElementById(t).classList.toggle("toggleCv");
		document.getElementById(p).classList.toggle("toggleCv");
	};
	
}
function progressBar2() {
	/*calcul % recule form*/

	var x = document.getElementById("frm1");
	var h = x.length;
	var foo = 100/h;
	
	document.getElementById("progressbar").style.width= (foo*g)-h+"%";

		/*TODO switch de question*/


}