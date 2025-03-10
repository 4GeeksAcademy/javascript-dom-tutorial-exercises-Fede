// Your code here
/* Seleccionar los elementos del DOM */
const inputField = document.getElementById("addToDo");
const todoList = document.querySelector("ul");
    /* document.getElementById("addToDo"): Obtiene el campo de entrada (<input>) donde el usuario escribe la tarea.
        document.querySelector("ul"): Obtiene la lista desordenada (<ul>) donde se agregarán las tareas. */

/*  Función para agregar una tarea (addTask) */
function addTask() {
    const taskText = inputField.value.trim();
    /* Obtiene el texto ingresado en el campo de entrada (inputField.value).
        trim(): Elimina los espacios en blanco al inicio y al final para evitar agregar tareas vacías o solo con espacios. */

    if (taskText !== "") {
        /* Se verifica que el texto no esté vacío antes de agregar la tarea. */
        const listItem = document.createElement("li");
            /* Se crea un nuevo elemento <li> para la tarea. */
        listItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskText}`;
            /* Se usa innerHTML para agregar un ícono de basura (<i class="fa fa-trash"></i>) dentro de un <span>, junto con el texto de la tarea. */
        todoList.appendChild(listItem);
            /* Se agrega el <li> dentro de la lista <ul> para que se muestre en la página. */
        inputField.value = "";
            /* Se vacía el campo de entrada después de agregar la tarea. */
    }
}

/* Función para eliminar una tarea (deleteTask) */
function deleteTask(event) {
    const clickedElement = event.target;
    /* event.target obtiene el elemento específico en el que el usuario hizo clic. */

    if (clickedElement.classList.contains("fa-trash")) {
        /* Se verifica si el elemento clickeado tiene la clase fa-trash, que corresponde al ícono de eliminación. */
        const listItem = clickedElement.parentElement.parentElement;
            /* clickedElement.parentElement: Obtiene el <span> que contiene el ícono.
                clickedElement.parentElement.parentElement: Obtiene el <li> que representa la tarea completa. */
        todoList.removeChild(listItem);
            /* Se elimina la tarea (<li>) de la lista.*/
    }
}

/*  Agregar tarea al presionar "Enter" */
inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

/* Eliminar tarea al hacer clic en el ícono de basura */
todoList.addEventListener("click", deleteTask);
/* Se agrega un evento de clic a la lista <ul>, que detectará cuando se haga clic en el ícono de basura y ejecutará deleteTask(). */