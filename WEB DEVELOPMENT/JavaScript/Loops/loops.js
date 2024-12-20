console.log("About loops")
for(let a=0;a<10;a++){
    console.log(a);
}
let obj={
    name: "mayank",
    role:"programmer",
    company:"code with mayank",
}
for (const key in obj) {
    
        const element = obj[key];
        console.log(key,element)
    
}
for (const c of "mayank") {
    console.log(c)
    
}
let i=4;
while(i<6){
    console.log(i);
    i++;
}
let j=0;
do {
    console.log(j);
    j++;
    
} while (j<3);

