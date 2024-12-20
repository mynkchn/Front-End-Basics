console.log("Lets Write the Script")

console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".box").outerHTML)
// innerText and outerText

console.log(document.querySelector(".container").tagName)
// tag name is applicable only for tags and node name can be used for text as well as comment
//textContent - Gives Text inside of given tag
 document.querySelector(".box").innerHTML="I m again a Box"
 console.log(document.querySelector(".box").hasAttribute("style"))

 console.log(document.querySelector(".box").getAttribute("style"))

 console.log(document.querySelector(".box").setAttribute("style","display:inline"))

 console.log(document.querySelector(".box").attributes)

console.log(document.querySelector(".box").dataset)

let div = document.createElement("div")

    div.innerHTML="i have been inserted"
div.setAttribute("class","created");
document.querySelector(".container").before(div)
document.querySelector(".container").after(div)

document.querySelector(".container").append(div)

// let cont = document.querySelector(".container")
// cont.insertAdjacentElement("afterend","<b>I am Under the water</b>")

console.log(document.querySelector(".box").classList)

document.querySelector(".box").classList.remove("red")


document.querySelector(".box").classList.add("purple")

