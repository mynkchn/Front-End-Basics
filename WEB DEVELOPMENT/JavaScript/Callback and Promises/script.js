console.log("Mayank is a hacker")
console.log("Rohan is also a hacker")
//Asynchronous
setTimeout(() => {
    console.log("I am inside set timeout")

    
}, 2000);
setTimeout(() => {
    console.log("I am inside set timeout 2")

    
}, 4000);
console.log("The End")
// CallBack Function
const callback=(arg) => {console.log(arg) 

}
const loadScript=(src,callback) => { 
    let sc= document.createElement("script");
    sc.src=src;
    sc.onload=callback("Mayank")
    document.head.append(sc)

 }

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

// To solve pyramid of dom we use promises
// Solution to CallBack Hell
