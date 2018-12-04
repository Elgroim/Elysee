var armory = require('armory.js');
var mission = require('mission.js');

class MissionEquipment{
	id;
	mission_id = mission.getID();
	armory_id = armory.getID();
	quantity;

	constructor(quantite){
		this.quantity = quantite;
	}

	setID(id){
		this.id = id;
	}
	
	getID(){
		return this.id;
	}

	setQuant(quantite){
		this.quantity = quantite;
	}
	
	getQuant(){
		return this.quantity;
	}
}