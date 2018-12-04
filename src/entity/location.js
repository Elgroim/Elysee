class Location {
	id;
	name;
	lat;
	long;

	constructor(nom, lat, long){
		this.name = nom;
		this.lat = lat;
		this.long = long;
	}

	setID(id){
		this.id = id;
	}
	
	getID(){
		return this.id;
	}

	setLat(lat){
		this.lat = lat;
	}

	getLat(){
		return this.lat;
	}

	setName(nom){
		this.name = nom;
	}

	getName(){
		return this.name;
	}

	setLong(long){
		this.long = long;
	}

	getLong(){
		return this.long;
	}
}