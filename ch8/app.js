//console.log(document.getElementsByTagName("span")[0])
//console.dir(document.getElementsByTagName("span")[0])

let x=document.getElementsByTagName("span")[0]
console.log(x)

let y=document.getElementsByTagName("span")[0]
console.dir(y)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

//for text node

document.body.firstChild
document.body.firstChild.data 
document.body.firstChild.nodeValue

// document.body.firstChild.data
// '\n    Hello word\n    '
// document.body.firstChild
// " Hello word "
// document.body.firstChild.nodeValue
// '\n    Hello word\n    '

//           assess only text of a html            
console.log(document.body.textContent)