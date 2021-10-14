"use strict";
class Player {
	constructor(
		name,
		hp,
		img,
		weapon = ["default nozhik", "default  lopata", "default lomik"]
	) {
		this.name = name;
		this.hp = hp;
		this.img = img;
		this.weapon = weapon;
	}

	attack() {
		console.log(`${this.name} fight`);
	}
}
function createPlayer({ name = "Untitled", hp: life = 100, img, weapon }) {
	let $player = document.createElement("div");
	const arena = document.querySelector("div.arenas");
	$player.classList.add("player1");
	arena.appendChild($player);
	$player.insertAdjacentHTML(
		"afterBegin",
		`
    <div class="progressbar">
			<div class="life">${life}</div>
			<div class="name">${name}</div>
		</div>
		<div class="character">
			<img src="${img}" />
		</div>
	</div>;
    `
	);
}

let player1 = new Player(
	"Scorpion",
	70,
	"http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
	[]
);
let player2 = new Player(
	"Sonya",
	100,
	"http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
	[]
);
createPlayer(player1);
createPlayer(player2);
