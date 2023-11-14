let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
     console.log ('Promise выполнено');
  }, 2000);
})

let promise1 = Promise.reject(new Error('phone')) 
.catch(function(error) {
 setTimeout (() => {
 console.log(error)
  }, 3000)
 })
 promise1
.catch(reason => {
  console.log(reason)
  console.log(promise1)
})


let promise2 = new Promise((onResolve, onReject) => {
  if(Math.random() % 2 === 0) { 
    onReject('Error!')
     } else{
    onResolve('Succes')
     }
})
promise2
.then(response => {
  console.log(response)
  console.log(promise2)
})


let promise3 = new Promise((resolve) => {
   resolve(obj = {
    completed: false,
    id: 12,
    title:  "November",
    userId: 12
  })
})


fetch('https://jsonplaceholder.typicode.com/todos/12', {
   method: 'PUT',
   headers: {
    'Content-Type':'application/json',
  },
  body: JSON.stringify(promise3)
})
       .then(res => res.json())
      .then(data =>{ console.log(data)})



 