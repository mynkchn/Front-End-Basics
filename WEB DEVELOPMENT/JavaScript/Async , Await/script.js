
//    async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);

//     })

//    }
// Settle means resolve or reject
// resolve means promise is settled
// reject means promise is not settled
   async function getData(){
    // let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data=await x.json()
      
      return data
      
        

   }
   async function main() {
    
   
   console.log('Loading Modules');
   console.log('Do Something else');
   console.log('Load Data');
   let data= await getData()
   
//     data.then((message)=>{
//     console.log(message);
    

//    }).catch((err) => { 
//     console.log(err);

//     })
   console.log(data);
   
   console.log("Process data")
   console.log('task 2');
   
}
main()
   
   