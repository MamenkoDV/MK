"use strict";
class Player {
	constructor(name, hp, img, weapon) {
		this.name = name;
		this.hp = hp;
		this.img = img;
		this.weapon = ["default nozhik", "default  lopata", "default lomik"];
	}

	attack() {
		console.log(`${this.name} fight`);
	}
}
const player1 = new Player(
	"Scorpion",
	120,
	"http://reactmarathon-api.herokuapp.com/assets/scorpion.gif"
);
const player2 = new Player(
	"Sonya",
	110,
	"http://reactmarathon-api.herokuapp.com/assets/sonya.gif"
);
player1.attack();
player2.attack();
