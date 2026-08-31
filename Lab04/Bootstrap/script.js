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
                const columna = document.createElement("div");
                columna.className ="col-md-4 col-lg-3";
                const carta = document.createElement("div");
                carta.className ="card h-100";
                const imagen =document.createElement("img");
                imagen.src = datosPokemon.sprites.front_default;
                imagen.className = "card-img-top";
                const cuerpo = document.createElement("div");
                cuerpo.className ="card-body text-center";
                const nombre = document.createElement("h5");
                nombre.className ="card-title";
                nombre.textContent = datosPokemon.name;
                cuerpo.appendChild(nombre);
                carta.appendChild(imagen);
                carta.appendChild(cuerpo);
                columna.appendChild(carta);
                galeria.appendChild(columna);
            }
        };

        xhrPokemon.send();
    });
});