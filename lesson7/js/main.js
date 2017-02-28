var Animal = function() {
};

Animal.prototype.eat = function () {
    console.log("Animal eats.");
};


Animal.prototype.drink = function () {
    console.log("Animal drinks.");
};

function Cat(name, breed) {

    this.name = name;
    this.breed = breed;
};

//Student.prototype = Object.create(Person.prototype);

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.consturctor = Cat;
Cat.prototype.getBreed = function() {
    console.log(this.breed);
}

var cat1 = new Cat("Cunt", "Shit");
