// navbar-line animation
let horizontalUnderLine = document.getElementById("horizontal-underline");
console.log(horizontalUnderLine);

let horizontalMenus = document.querySelectorAll("li.nav-item");
console.log(horizontalMenus);
horizontalMenus.forEach(menu=>{
    menu.addEventListener("mouseover",(e)=>horizontalIndicator(e));
});
horizontalMenus.forEach(menu=>{
    menu.addEventListener("mouseout",(e)=>{
        horizontalUnderLine.style.backgroundColor ="transparent";
    });
});

function horizontalIndicator(e){
    horizontalUnderLine.style.left= e.currentTarget.offsetLeft+"px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth+"px";
    horizontalUnderLine.style.top = 
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight+"px";
    horizontalUnderLine.style.backgroundColor = "#FFFFFF";
}
// navbar-line animation

// sample-line-animation
let horizontalUnderLine_1= document.getElementById("horizontal-underline-1");
console.log(horizontalUnderLine_1);
let horizontalBtns= document.querySelectorAll(".menuline");
console.log(horizontalBtns);
horizontalBtns.forEach(menu=> menu.addEventListener("mouseover",(e)=>{
    horizontalUnderLine_1.style.left= e.currentTarget.offsetLeft+"px";
    horizontalUnderLine_1.style.width= e.currentTarget.offsetWidth+"px";
    horizontalUnderLine_1.style.top= 
    e.currentTarget.offsetheight+e.currentTarget.offsetTop+"px";
    horizontalUnderLine_1.style.backgroundColor ="#FFFFFF";
}));
horizontalBtns.forEach(menu=>menu.addEventListener("mouseout",(e)=>{
horizontalUnderLine_1.style.backgroundColor ="transparent";
}));
// sample-line-animation


//main animation
let mainText = document.querySelector(".jumbotron");
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    if(value>430){
        mainText.style.animation="dissapear-ani-jumbotron 1s ease-out forwards";
    console.log("사라졌다ㅓ");
    }else{
        mainText.style.animation="slide-ani-jumbotron 1s ease-out";
    }
});
//main animation