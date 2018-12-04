var location = require('location.js');

class InterventionGroup{
	id;
	barrack_location_id = location.getID();
	name;

	constructor(name){
		this.name = name;
	}

	setID(id){
		this.id = id;
	}
	
	getID(){
		return this.id;
	}

	setName(name){
		this.name = name;
	}
	
	getName(){
		return this.name;
	}
}