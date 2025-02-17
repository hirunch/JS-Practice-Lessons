//static method

class Dog{
  constructor(name, breed){
    this.name = name
    this.breed = breed
  }

  bark(){
    return console.log(`${this.name} is barking`)
  }

  static generateRandomBreed(){
    const breeds = ['Labrador', 'Pug', 'Bulldog', 'Poodle', 'Husky']
    const randomIndex = Math.floor(Math.random() * breeds.length)
    return breeds[randomIndex]
  }

  static generateRabdomName(){
    const names = ['Max', 'Bella', 'Charlie', 'Lucy', 'Cooper']
    const RandomIndex = Math.floor(Math.random() * names.length)
    return names[RandomIndex]
  }
}

const randomBreed = Dog.generateRandomBreed()
const randomName = Dog.generateRabdomName()
const dogOne = new Dog(randomName, randomBreed)
console.log(dogOne.name)
console.log(dogOne.breed)