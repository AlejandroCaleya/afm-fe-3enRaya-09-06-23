// let gamebtn = document.getElementById("gamebtn");
// gamebtn.addEventListener("click", validPlayers);

// let container = [];
// container = document.getElementById("container");

// let inputError = document.getElementsByClassName("input");

// function validPlayers() {
// 	let j1 = document.getElementById("j1").value;
// 	let j2 = document.getElementById("j2").value;
// 	if (j1 != "" && j2 != "") {
// 		container.style.display = "grid";
// 		gamebtn.style.display = "none";
// 		for (var i = 0; i < inputError.length; i++) {
// 			inputError[i].style.borderColor = "";
// 		}
// 	} else {
// 		for (var i = 0; i < inputError.length; i++) {
// 			inputError[i].placeholder = "Introduce un nombre!!!";
// 			inputError[i].style.borderColor = "red";
// 		}
// 	}
// }

// $(".work").on("click", boxCheck);

// function boxCheck() {
// 	var containerFull = document.querySelectorAll("#container");
// 	containerFull.forEach((element, index) => {
// 		element.addEventListener("click", (e) => btnPulsado(e, indice));
// 	});
// }

// const btnPulsado = (e, pos) => {
// 	turno++;
// 	const btn = e.target;
// 	const color = turno % 2 ? "green" : "yellow";
// 	btn.style.backgroundColor = color;

// 	container[pos] = color;
// 	if (haGanado()) {
// 		const jugador1 = "Ganador : " + $("#j1").val();
// 		const jugador2 = "Ganador : " + $("#j2").val();

// 		if (color == "green") document.getElementById("gana").innerHTML = jugador1;
// 		else document.getElementById("gana").innerHTML = jugador2;
// 	}
// };

// const haGanado = () => {
// 	if (container[0] == container[1] && container[0] == container[2] && container[0]) {
// 		return true;
// 	} else if (container[3] == container[4] && container[3] == container[5] && container[3]) {
// 		return true;
// 	} else if (container[6] == container[7] && container[6] == container[8] && container[6]) {
// 		return true;
// 	} else if (container[0] == container[3] && container[0] == container[6] && container[0]) {
// 		return true;
// 	} else if (container[1] == container[4] && container[1] == container[7] && container[1]) {
// 		return true;
// 	} else if (container[2] == container[5] && container[2] == container[8] && container[2]) {
// 		return true;
// 	} else if (container[0] == container[4] && container[0] == container[8] && container[0]) {
// 		return true;
// 	} else if (container[2] == container[4] && container[2] == container[6] && container[2]) {
// 		return true;
// 	}
// 	return false;
// };

let gamebtn = document.getElementById("gamebtn");
gamebtn.addEventListener("click", validPlayers);

let container = [];
container = document.getElementById("container");

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

$(".work").on("click", boxCheck);

function boxCheck() {
	var containerFull = document.querySelectorAll("#container .work");
	containerFull.forEach((element, indice) => {
		element.addEventListener("click", (e) => btnPulsado(e, indice));
	});
}

const btnPulsado = (e, pos) => {
	turno++;
	const btn = e.target;
	const color = turno % 2 ? "green" : "yellow";
	btn.style.backgroundColor = color;

	container[pos].style.backgroundColor = color;
	if (haGanado()) {
		const jugador1 = "Ganador : " + $("#j1").val();
		const jugador2 = "Ganador : " + $("#j2").val();

		if (color == "green") document.getElementById("gana").innerHTML = jugador1;
		else document.getElementById("gana").innerHTML = jugador2;
	}
};

const haGanado = () => {
	if (
		container[0].style.backgroundColor == container[1].style.backgroundColor &&
		container[0].style.backgroundColor == container[2].style.backgroundColor &&
		container[0].style.backgroundColor
	) {
		return true;
	} else if (
		container[3].style.backgroundColor == container[4].style.backgroundColor &&
		container[3].style.backgroundColor == container[5].style.backgroundColor &&
		container[3].style.backgroundColor
	) {
		return true;
	} else if (
		container[6].style.backgroundColor == container[7].style.backgroundColor &&
		container[6].style.backgroundColor == container[8].style.backgroundColor &&
		container[6].style.backgroundColor
	) {
		return true;
	} else if (
		container[0].style.backgroundColor == container[3].style.backgroundColor &&
		container[0].style.backgroundColor == container[6].style.backgroundColor &&
		container[0].style.backgroundColor
	) {
		return true;
	} else if (
		container[1].style.backgroundColor == container[4].style.backgroundColor &&
		container[1].style.backgroundColor == container[7].style.backgroundColor &&
		container[1].style.backgroundColor
	) {
		return true;
	} else if (
		container[2].style.backgroundColor == container[5].style.backgroundColor &&
		container[2].style.backgroundColor == container[8].style.backgroundColor &&
		container[2].style.backgroundColor
	) {
		return true;
	} else if (
		container[0].style.backgroundColor == container[4].style.backgroundColor &&
		container[0].style.backgroundColor == container[8].style.backgroundColor &&
		container[0].style.backgroundColor
	) {
		return true;
	} else if (
		container[2].style.backgroundColor == container[4].style.backgroundColor &&
		container[2].style.backgroundColor == container[6].style.backgroundColor &&
		container[2].style.backgroundColor
	) {
		return true;
	}
	return false;
};
