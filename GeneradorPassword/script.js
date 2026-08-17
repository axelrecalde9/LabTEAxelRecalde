let boton = document.getElementById('boton');
let mayusculas = document.getElementById('mayusculas');
let tamanho = document.getElementById('tamanho');
let condicion = document.getElementById('condicion');
let contrasenha = document.getElementById('espacioblanco');
let copiar = document.getElementById('copiar');
let caracteres = "";
let longitudContra = 0;


function elegirCaracteres(){
	condicion.textContent = "";
	caracteres = "";
	longitudContra = Number(tamanho.value);
	if(longitudContra < 8){
		condicion.textContent = "La contraseña debe tener al menos 8 caracteres";
		return;
	}
	if(!mayusculas.checked && !minusculas.checked && !numeros.checked && !simbolos.checked){
		condicion.textContent = "Seleccione al menos una opción";
		return;
	}


	if(mayusculas.checked){
		caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";	
	}
		
	if(minusculas.checked){
		caracteres += "abcdefghijklmnopqrstuvwxyz";
	}
	
	if(numeros.checked){
		caracteres += "0123456789";	
	}
	
	if(simbolos.checked){
		caracteres += "+-*/$#@!%^&()=_`~':;,<>?|.";	
	}
}

function generarContrasenha(){
	if(caracteres.length == 0){
		return;
	}
	let caracterRandom = "";
	let posicion = 0;
	for(let i = 0; i < longitudContra; i++){
		posicion = Math.floor(Math.random() *caracteres.length);
		caracterRandom += caracteres[posicion];
	}
	contrasenha.value = caracterRandom;
}

function copiarContrasenha(){
	if(contrasenha.value == ""){
		condicion.textContent = "Primero debe generar la contraseña";
		return;
	}
	navigator.clipboard.writeText(contrasenha.value);
	condicion.textContent = "Contraseña copiada";
}

boton.addEventListener('click', elegirCaracteres);
boton.addEventListener('click',generarContrasenha);
copiar.addEventListener('click',copiarContrasenha);
