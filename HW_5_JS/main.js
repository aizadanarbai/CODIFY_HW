const person = {
    name: 'Aizada',
    age: 24,
    getInfo: function(){
    console.log(`${this.name}${this.age}`)
    }
}
person.getInfo()

let calculator = {
    chislo1: 0,
    chislo2: 0,
    read(){
      calculator.chislo1 = +prompt(45) 
      calculator.chislo2 = +prompt(50) 
    },
    sum(){
      return console.log(calculator.chislo1 + calculator.chislo2)},
    mul(){
      return console.log(calculator.chislo1  * calculator.chislo2)},
  }
  calculator.read();
  alert( calculator.sum(45) );
  alert( calculator.mul(50) );

function Car(marka){
    this.marka = marka;
 } 
 const car1 = new Car('[Sanata]');
Car.prototype.toString = function carToString(){
     return `My car - ${this.marka}`;
} 
    console.log(car1.toString())
    
function daysWeek () {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thurhtday', 'Friday']
    this.day = week[0]
    return console.log(day)
}
daysWeek()

const product = {
    vegetable: 'potato',
    price:40,
    getInformation: function productToString(){
     console.log(`${this.vegetable}, ${this.price} `)
    }
}
    product.getInformation()

    const animal = {
      name: 'Dog',
      sound: 'Auf',
      getSound: function getSoundString(){
        console.log(`Dog ${this.sound}`)
      }
    }
    animal.getSound() 


     
    
  
    

     
     
     

     


 