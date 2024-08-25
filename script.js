function Car(make, model) {
	this.make = make;
	this.model = model;
	// this.getMakeModel = function(){//attaching this method to object   =>   WRONG WAY(INSTANCE METHOD), Withdraw functionality hui to har user ATM ghar pr thodi kholega
	// 	return this.make + " " + this.model;
	// }
}

Car.prototype.getMakeModel = function() {//attaching this method to object
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
  // this.Car(make, model);
	Car.call(this, make, model);//call will take 'this' newMemory and will call Car function with it only
	this.topSpeed = topSpeed;
	this.getTopSpeed = () => {
		return this.topSpeed;
	}
}
// Set up inheritance
SportsCar.prototype = Object.create(Car.prototype);// SportsCar.prototype = Car.prototype;  OR   Object.setPrototypeOf(SportsCar.prototype, Car.prototype);
// SportsCar.prototype.constructor = SportsCar;

// Add additional methods to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
