let slideIndex = 1;
function setSlide(input, index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children];
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    item.classList.add('active');
}

setInterval(()=>{
    slideIndex +=1;
    if(slideIndex == 4){
       slideIndex = 1;
    }
    setSlide(`slide${slideIndex}`, slideIndex)
} , 5000)

let remainingTime = 700000;

function setTime(){ 
    if(remainingTime == 0) return;
    let h = Math.floor(remainingTime/3600);
    let m = Math.floor((remainingTime%3600)/60);
    let s = (remainingTime%3600)%60;
    document.querySelector('#secends').innerHTML = h
    document.querySelector('#minutes').innerHTML = m
    document.querySelector('#hours').innerHTML = s
}

setInterval(()=>{
    remainingTime -=1;
    setTime();
} , 1000)