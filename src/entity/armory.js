class Armory {
	id;
	name;
	cost;
	stock;

	constructor(nom, cout, stock){
		this.name = nom;
		this.cost = cout;
		this.stock = stock;
	};

	setID(id){
		this.id = id;
	}

	getID(){
		return this.id;
	}

	setName(nom){
		this.name = nom;
	}

	getName(){
		return this.name;
	}

	setCost(cout){
		this.cost = cout;
	}

	getCost(){
		return this.cost;
	}

	setStock(stock){
		this.stock = stock;
	}

	getStock(){
		return this.stock;
	}
}