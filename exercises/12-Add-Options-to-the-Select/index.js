let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela", "Argentina"];

// Your code here
let selectElement = document.getElementById("mySelect");
/* Se busca en el documento un elemento con el id "mySelect" usando document.getElementById().
    Este elemento es un <select>, que es un menú desplegable en HTML. */

    /* Llenar el <select> con opciones: */
for (let i = 0; i < countries.length; i++) {
    let optionCountry = document.createElement("option");
    optionCountry.value = countries[i];
    optionCountry.innerHTML = countries[i];
    selectElement.appendChild(optionCountry);
  }
  /* Se recorre el array countries con un bucle for.
    En cada iteración:*/
    /* Se crea un nuevo elemento <option> con document.createElement("option").
    Se establece el valor del <option> con optionCountry.value = countries[i].
    Se define el texto visible con optionCountry.innerHTML = countries[i].
    Se agrega el <option> al <select> con appendChild(optionCountry).
    Después de este paso, el <select> en el HTML tendrá las opciones llenas con los países.
 */

    /* Detectar cuando el usuario cambia la selección: */
  selectElement.addEventListener("change", function () {
    let selectedCountry = selectElement.value;
    alert(selectedCountry);
  });
  /* Se agrega un event listener al <select>, que escucha el evento "change" (cuando el usuario selecciona una opción nueva).
    Dentro de la función:

    Se obtiene el valor seleccionado con selectElement.value.
    Se muestra una alerta con alert(selectedCountry), que muestra el país elegido. */