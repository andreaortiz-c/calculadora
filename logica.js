//Declaraciones de variables 
var operaciona;
var operacionb;
var operacion;

document.getElementsByTagName('')

	alert("Bienvenido al programa, puedes realizar tus operaciones basicas");
	//variables 
	function int(){
	var resultado=document.getElementById('resultado');
	var resert =document.getElementById('resert');
	var suma =document.getElementById('suma');
	var resta =document.getElementById('resta');
	var division =document.getElementById('division');
	var multiplicacion =document.getElementById('multiplicacion');
	var igual =document.getElementById('igual');
	var cero =document.getElementById('cero');
	var uno =document.getElementById('uno');
	var dos =document.getElementById('dos');
	var tres =document.getElementById('tres');
	var cuatro =document.getElementById('cuatro');
	var cinco =document.getElementById('cinco');
	var seis=document.getElementById('seis');
	var siete =document.getElementById('siete');
	var ocho =document.getElementById('ocho');
	var nueve =document.getElementById('nueve');

//eventos
uno.onclick=function(e){
	resultado.textContent=resultado.textContent+"1";
}
dos.onclick=function(e){
	resultado.textContent=resultado.textContent+"2";
}
tres.onclick=function(e){
	resultado.textContent=resultado.textContent+"3";
}
cuatro.onclick=function(e){
	resultado.textContent=resultado.textContent+"4";
}
cinco.onclick=function(e){
	resultado.textContent=resultado.textContent+"5";
}
seis.onclick=function(e){
	resultado.textContent=resultado.textContent+"6";
}
siete.onclick=function(e){
	resultado.textContent=resultado.textContent+"7";
}
ocho.onclick=function(e){
	resultado.textContent=resultado.textContent+"8";
}
nueve.onclick=function(e){
	resultado.textContent=resultado.textContent+"9";
}
cero.onclick=function(e){
	resultado.textContent=resultado.textContent+"0";
}
suma.onclick=function(e){
	resultado.textContent=resultado.textContent+"+";
	limpiar();
}
resta.onclick=function(e){
	resultado.textContent=resultado.textContent+"-";
	limpiar();
}
multiplicacion.onclick=function(e){
	resultado.textContent=resultado.textContent+"x";
	limpiar();
}
division.onclick=function(e){
	resultado.textContent=resultado.textContent+"/";
	limpiar();
}
igual.onclick=function(e){
	resultado.textContent=resultado.textContent+"=";
	limpiar();
}
reset.onclick=function(e){
	resetear();
}
suma.onclick=function(e){
	operaciona=resultado.textContent;operacion="+"
	limpiar();
}
resta.onclick=function(e){
	operaciona=resultado.textContent;operacion="-"
	limpiar();
}
multiplicacion.onclick=function(e){
	operaciona=resultado.textContent;operacion="x"
	limpiar();
}
division.onclick=function(e){
	operaciona=resultado.textContent;operacion="/"
	limpiar();
}
igual.onclick=function(e){
	operacionb=resultado.textContent;
	resolver();
}
function limpiar(){
	resultado.textContent="";
}
function resetear (){
	resultado.textContent="";
	operaciona=0;
	operacionb=0;
	operacion="";
}
function resolver(){
	var res=0; //inicializacion en cero,no tiene valor
	switch (operacion){
		case "+":
		res=parseFloat(operaciona)+parseFloat(operacionb);break;
		case "-":
		res=parseFloat(operaciona)-parseFloat(operacionb);break;
		case "x":
		res=parseFloat(operaciona)*parseFloat(operacionb);break;
		case "/":
		res=parseFloat(operaciona)/parseFloat(operacionb);break;
}
	resetear();
	resultado.textContent=res;
}
}







