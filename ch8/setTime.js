document.write("hello")

// let a = setTimeout(function(){
//     alert("I am inside of settimeout")
// },5000)                 // this function give that massage after 2000 milisecond or 2sec after the hello shown in a screen

// clearTimeout(a)        //this command clear the previous setTimeout
// console.log(a)


//same output but if user want to set if timeout or not
// let a = setTimeout(function(){
//     alert("I am inside of settimeout")
// },5000)  
// let b=prompt("do you want to run the settimeout?")
// if("n"==b){
//     clearTimeout(a)
// }
// console.log(a)



const sum=(a,b)=>{
    console.log("yes i am running"+(a+b))
    a+b
}
setTimeout(sum,100,1,2)   //it run in a web console of here setTimeout(function,delay,argument1,argument2)