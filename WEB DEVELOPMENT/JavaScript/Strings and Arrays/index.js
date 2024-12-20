let a="mayank";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
let name="Christy";
let name1="Joofiy";
console.log("My name is"+ name +" and my frnds name is"+name1)
let s='my namme is ${name} and my frnds nmme is ${name1}';
let b="hello";
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.concat(a))
console.log(b.replace('h','H'))

// Arrays
let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))



let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
numbers.splice(1, 3)  
numbers.splice(1, 3, 222, 333) 
(4) [1, 222, 333, 5]

// Functions of Array
let arr= [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))