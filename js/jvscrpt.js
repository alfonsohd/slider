var array = ["img/2.gif", "img/1.gif", "img/3.gif", "img/4.gif", "img/5.gif"];
var cont = 0;

function adelante() {
	document.getElementById("img").src = array[cont];
	cont++;
	if (cont >= array.length) {
		cont = 0;
		}
}
function atras(){
	document.getElementById("img").src = array[cont];
	cont--;
	if (cont == 0 -1) {
		cont=4;
		}
	}
function cambio(){
	document.getElementById("img").src = array[cont];
	cont++;
	document.getElementById("radios").checked = true;
	if (cont >= array.length){
		cont = 0;
	}
}
var inter = setInterval("cambio()", 3000);
/*
function auto(){
	setInterval("cambio()", 3000); 
	document.getElementById("auto").disabled = true;
}	
function reset(){
	cont = 0;
}*/

window.onload = function(){
	document.botones.boton[0].addEventListener("click", radio);
	document.botones.boton[1].addEventListener("click", radio);
	document.botones.boton[2].addEventListener("click", radio);
	document.botones.boton[3].addEventListener("click", radio);
	document.botones.boton[4].addEventListener("click", radio);
}
function radio(){
	for ( i = 0; i <botones.boton.length; i++) {
		if (botones.boton[i].checked) {
			document.getElementById("img").src = botones.boton[i].value;
			break;
		}
	}
}