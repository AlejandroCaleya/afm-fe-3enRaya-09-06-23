let boton = document.getElementById("gamebtn");
boton.addEventListener("click", validPlayers);

let container = [];
container = document.getElementById("container");
let gamebtn = document.getElementById("gamebtn");

let inputError = document.getElementsByClassName("input");

function validPlayers() {
	let j1 = document.getElementById("j1").value;
	let j2 = document.getElementById("j2").value;
	if (j1 != "" && j2 != "") {
		container.style.display = "grid";
		gamebtn.style.display = "none";
		for (var i = 0; i < inputError.length; i++) {
			inputError[i].style.borderColor = "";
		}
	} else {
		for (var i = 0; i < inputError.length; i++) {
			inputError[i].placeholder = "Introduce un nombre!!!";
			inputError[i].style.borderColor = "red";
		}
	}
}

function boxCheck() {
	container.forEach((index, element) => {
		element.addEventListener("click", function (e) {});
	});
}
