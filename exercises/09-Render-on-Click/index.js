let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newDiv = document.createElement("div");
	newDiv.style.background = "yellow";
	newDiv.innerHTML = "Hello World"; 
	document.body.appendChild(newDiv);
});
