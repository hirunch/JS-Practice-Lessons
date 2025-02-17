//getter and setter in javascript

class Dog{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this._age = 0;
  }

  get age(){
    return this._age; 
  }

  set age(value){
    this._age = value;
  }
}

const dogOne = new Dog();
dogOne.age = 5;
console.log(dogOne.age);
