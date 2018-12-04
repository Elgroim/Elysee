var location = require('location.js');

class Mission{

	id;
	date;
	name;
	location_id = location.getID();

	constructor(date, nom){
		this.date = date;
		this.name = nom;
	}

	setID(id){
		this.id = id;
	}
	
	getID(){
		return this.id;
	}

	setDate(date){
		this.date = date;
	}

	getDate(){
		return this.date;
	}

	setName(nom){
		this.name = nom;
	}

	getName(){
		return this.name;
	}
}