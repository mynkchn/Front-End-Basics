console.log('This is promises')
let prom1= new Promise((resolve, reject)=> {
    let a = Math.random();
    if(a<0.5){
        reject("No random number was supporting")
    }
    else{
    setTimeout(() => {
        console.log('Yes im done');
        resolve("Mayank")
        
    }, 3000);
    }
 })
 
 let prom2= new Promise((resolve, reject)=> {
    let a = Math.random();
    if(a<0.5){
        reject("No random number was supporting")
    }
    else{
    setTimeout(() => {
        console.log('Yes im done 2');
        resolve("Mayank 2")
        
    }, 3000);
    }
 })
 prom1.then((a) => { console.log(a);
 }).catch( (err)=> {
    console.log(err);
    
 })
 
 let p3 =Promise.all([prom1,prom2])
 p3.then((a) => { console.log(a);
 }).catch( (err)=> {
    console.log(err);
    
 })
 
 //Promise 
 
//  let e= new Promise((response, reject)=>{
//     console.log('Cake is baking');
//     setInterval(() => {
//         const success=true;
//         if(success){
//             response("Cake is baked")
            
//         }
//         else{
//             reject("Cake is burnt")
//         }
        
//     }, 2000);
    
// })

// e.then((message)=>{
// console.log(message);


// }).catch((err)=>{
// console.log(err);

// })
