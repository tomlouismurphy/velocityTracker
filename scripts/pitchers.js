const startingPitchers = [];

class Pitcher {
	constructor(name, age, activePlayer){
		this.name = name;
		this.age = age;
		this.activePlayer = activePlayer;
		this.pitches = [];
	}
}

const sale = new Pitcher('Chris Sale', 29, true);
startingPitchers.push(sale);
const price = new Pitcher('David Price', 32, true);
startingPitchers.push(price);
const porcello = new Pitcher('Rick Porcello', 29, true);
startingPitchers.push(porcello);
const rodriguez = new Pitcher('Eduardo Rodriguez', 25, true);
startingPitchers.push(rodriguez);
const pomeranz = new Pitcher('Drew Pomeranz', 29, true);
startingPitchers.push(pomeranz);
const velazquez = new Pitcher('Hector Velazquez', 29, true);
startingPitchers.push(velazquez);
const johnson = new Pitcher('Brian Johnson', 27, true);
startingPitchers.push(johnson);