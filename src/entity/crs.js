class Crs{
	id;
	name;
	access_level;
	reg_number;
	dream;

	constructor(nom, access_level, reg_number, dream){
		this.name = nom;
		this.access_level = access_level;
		this.reg_number = reg_number;
		this.dream = dream;
	}

	setID(id){
		this.id = id;
	}
	
	getID(){
		return this.id;
	}

	setAccessLevel(access_level){
		this.access_level = access_level;
	}

	getAccessLevel(){
		return this.access_level;
	}

	setName(nom){
		this.name = nom;
	}

	getName(){
		return this.name;
	}

	setRegNumber(reg_number){
		this.reg_number = reg_number;
	}

	getRegNumber(){
		return this.reg_number;
	}

	setDream(dream){
		this.dream = dream;
	}

	getDream(){
		return this.dream;
	}
}