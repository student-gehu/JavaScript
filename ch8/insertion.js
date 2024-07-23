let a=document.getElementsByTagName("div")[0]

// a.innerHTML=a.innerHTML+"<h1>Hello World!</h1>";   //add h1 heading 

let div=document.createElement("div");
div.innerHTML="<h1>Hello World!</h1>";  //same work as upper work but other method
// a.appendChild(div);                  //append is like useual other languages , a container or div attach to end of file(EOF)
// a.prepend(div)                          //attach in starting int the div or container (like he will become first child of a div)
// a.before(div)                           //incert before the container
// a.after(div)                            // incert after the container
// a.replaceWith(div)                     //replace the whole container


first.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>');
first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>');
first.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>');
first.insertAdjacentHTML('afterend','<div class="test">afterend</div>');