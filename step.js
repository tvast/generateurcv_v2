var i=1;
var g=0;
var p = 0;
var t = 0;

function progressBar() {

	/*calcul % avance form*/
	var x = document.getElementById("frm1");
	var h = x.length;
	console.log(h+"tab")
	var foo = 100/h;
	/*console.log(foo)*/
	/*Iteration a chaque click*/
	x= i++*10;
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
		var t = p-1;
		console.log(p+"");
		console.log(t+"-1");
		console.log(g+"zini");
		/*document.getElementById(0).classList.add("toggleCv");
		document.getElementById(1).classList.add("toggleCv");*/
		document.getElementById(t).classList.toggle("toggleCv");
		document.getElementById(p).classList.toggle("toggleCv");
	};
	
}

/*function switchQh () {
	
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
		console.log(g+"zini");
		
		document.getElementById(t).classList.toggle("toggleCv");
		document.getElementById(p).classList.toggle("toggleCv");
	};
}*/


