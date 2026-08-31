let boton = document.getElementById('boton');
let galeria = document.getElementById("galeria");
boton.addEventListener('click',function(){


	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.thecatapi.com/v1/images/search?limit=10");
	xhr.onload = function(){
		if(xhr.status == 200){	
			const gatos = JSON.parse(xhr.responseText);
			galeria.innerHTML = "";
			gatos.forEach(function(elem){
				const foto = document.createElement("img");
				foto.src = elem.url;
				galeria.appendChild(foto);

			});
		}
		
	};
	xhr.send();
});