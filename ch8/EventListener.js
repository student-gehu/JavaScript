
let x=function(e){
    alert("Hello world1!")
}
let y=function(e){
    alert("Hello world2!")
}

btn.addEventListener('click',x)

btn.addEventListener('click',y)

let a=prompt("what is your favorite number?");

if(a=="2"){
    btn.removeEventListener('click',x)
}
