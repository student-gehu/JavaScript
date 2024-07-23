//get the bookmark by the EventListner

document.getElementById("google").addEventListener("click",function(){
    let url = "https://www.google.com/search?q=javascript";
    let win = window.open (url, "" , "width=500", scrollbars=yes, resizable=yes);
    win.focus();
})

//get data fatch in every 5 second 
const fetchContent = async (url) => {
    con = await fetch (url);
    let a = await con.json()
    return a;
}

setInterval(async function(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
},3000)