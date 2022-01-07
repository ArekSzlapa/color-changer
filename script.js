const colors=['red','blue','green','black'];
const display=document.querySelector(".color");
const btn = document.querySelector('.clickMe');

btn.addEventListener('click', function(){
    const randomNumer=randomColor();
    document.body.style.backgroundColor = colors[randomNumer];
    color.textContent=colors[randomNumer];
});

function randomColor(){
    return Math.floor((Math.random())*colors.length);
}