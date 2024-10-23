const colors = ['red','blue','green','#FFF' , 'purple']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click' ,function(){
    const rand = getRandom()
    console.log(rand)
    document.body.style.backgroundColor=colors[rand]
    color.textContent = colors[rand]
})


function getRandom (){
    return Math.floor( Math.random()*colors.length)
}