//set initial count
let count = 0;

//select value
const value = document.querySelector('#value');
const btns=document.querySelectorAll('.btn');
// console.log(btn)

btns.forEach(function(btn){
    btns.addEventListener('click',function(e){
        console.log(e.currentTarget)
    })
})