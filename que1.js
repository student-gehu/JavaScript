document.getElementsByTagName("nav")[0].firstElementChild.style.color=("red")
document.getElementsByTagName("nav")[0].lastElementChild.style.color=("green")

// make a background of all <li> tags to cyan
// Ans:- for making it all li cyan we have to use the array or for each element consept to make all li cyan
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background="cyan";
});

//que->(5) which of the following is used to look for the farthest ancestor that matchs a given css selector
//(a) match
//(b) closest 
//(c) contains
//(d) none of these (..ans!)