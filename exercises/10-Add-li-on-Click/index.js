let button = document.getElementById("superDuperButton"); 
/* Se usa document.getElementById("superDuperButton") para seleccionar el botón con el ID "superDuperButton". */
/* Luego, se almacena en la variable button. */

button.addEventListener("click", function() {
	/* addEventListener("click", function() { ... }) asocia una función anónima al evento click del botón.
	Cada vez que el usuario haga clic en el botón, se ejecutará el código dentro de la función. */
	
	// Your code here
	let newLi = document.createElement("li");
	/* Se usa document.createElement("li") para crear un nuevo elemento <li>.
	Este nuevo <li> todavía no está en la página, solo existe en la memoria. */

	newLi.innerHTML = "Forth element"
	/* Se asigna el texto "New item" al interior del nuevo <li>. */

	let myNewList = document.getElementById("myList");
	/* Se usa document.getElementById("myList") para seleccionar el elemento de lista (puede ser <ul> o <ol>) con el ID "myList".
	Se almacena en la variable myList. */

	myNewList.appendChild(newLi);
	/* Se usa appendChild(newLi) para agregar el nuevo <li> al final de la lista. */
});
