//inheritance 

class Dog{
  constructor(name, breed){
    this.name = name
    this.breed = breed
  }

  bark(){
    return console.log(`${this.name} is barking`)
  }

  discribe(){
    return console.log(`Dog name is ${this.name} and breed is ${this.breed}`)
  }
}


class Puppy extends Dog{
  constructor(name, breed, age){
    super(name, breed)
    this.age = age
  }

  play(){
    return console.log(`${this.name} is playing`)
  }

  dogAge(){
    return console.log(`${this.name} is ${this.age} years old`)
  }

  discribe(){
    return console.log(`Dog name is ${this.name} \nBreed is ${this.breed} \nAge is ${this.age}`)
  }
}

const puppyOne = new Puppy('Tommy', 'Labrador', 2)

puppyOne.bark()
puppyOne.play()
puppyOne.dogAge()
puppyOne.discribe()