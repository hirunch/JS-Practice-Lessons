//javascript classes
//class is a blueprint for creating objects
//class is a template for creating objects

class rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  area(){
    return this.width * this.height;
  }

  discribe(){
    return console.log(`This rectangel width is ${this.width} and height is ${this.height} and area is ${this.area()}`)
  }
}

const rectOne = new rectangle(10, 5)
console.log(rectOne.area())
console.log(rectOne.width)
console.log(rectOne.height)
rectOne.discribe()


