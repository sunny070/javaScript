const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn= document.getElementById('btn');
const color = document.querySelector(".color")

btn.addEventListener("click",function(){
    const randomNumber =getRandomNumber();
    console.log()
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})

function getRandomNumber(){
    return Math.random();

}