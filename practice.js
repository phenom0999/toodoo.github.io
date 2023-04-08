
// To pop manage todo when hovered over
manage = document.querySelector("div button");  
manage.addEventListener("mouseover", function(){
    manage.style.borderWidth = "3px" ;
})
manage.addEventListener("mouseout", function(){
    manage.style.borderWidth = "1px";
})


// To underline signup when hovered over
signup = document.querySelector("a#signup");
signup.addEventListener("mouseover", function(){
    signup.style.borderBottom = "solid black 2px";
})
signup.addEventListener("mouseout", function(){
    signup.style.borderBottom = "none";
})




