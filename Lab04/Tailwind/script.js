let boton = document.getElementById("boton");
let galeria = document.getElementById("galeria");
boton.addEventListener("click", function() {

    galeria.innerHTML = "";
    const numeros = [];
    while (numeros.length < 12) {
        const numero = Math.floor(Math.random() * 1025) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    numeros.forEach(function(numero) {
        const xhrPokemon = new XMLHttpRequest();
        xhrPokemon.open(
            "GET",
            "https://pokeapi.co/api/v2/pokemon/" + numero
        );
        xhrPokemon.onload = function() {
            if (xhrPokemon.status == 200) {
                const datosPokemon = JSON.parse(xhrPokemon.responseText);
                const carta= document.createElement("div");
                carta.className ="bg-white rounded-[15px] shadow-md p-4 text-center";
                const imagen = document.createElement("img");
                imagen.src = datosPokemon.sprites.front_default;
                imagen.className = "w-full h-48 object-contain";
                const nombre = document.createElement("h5");
                nombre.className = "text-violet font-bold text-xl capitalize";
                nombre.textContent = datosPokemon.name;
                carta.appendChild(imagen);
                carta.appendChild(nombre);
                galeria.appendChild(carta);
            }
        };
        xhrPokemon.send();
    });
});