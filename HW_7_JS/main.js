const person = {
    name: 'Aizada;',
   age: 24,
   city: 'Batken;',
   hobby: 'Dancing;' 
}
const {
    name,
    age,
    city,
    hobby
} = person
console.log(name, age, city,hobby)

const [one, two, three,four ] = [1,2,3,4]
console.log(one,four)

function Person() {
    info = {
    name: 'Eliza',
    age: 16,
    status: 'Student',
    country: 'Kyrgyzstan'
   } 
let {status, country} = info
console.log(status,country)
let {name, age} = info
console.log (name,age)
}
Person()

const a = 'cat'
const b = 'dog'
console.log("dog is"  +  a + " cat is"  + b)

const store = {
    storename: 'Megaset',
    address:'Gagarin',
    worker1: {
        name: 'Ruslan',
        sername:'Tajidinov'
    },
    worker2: {
        name: 'Kanybek',
        sername: 'Saliev'
    }

}
const store1 = {
    ...store,
}
const {address,worker2} = store1
console.log(address, worker2)
 
