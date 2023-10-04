//set initial count
let count = 0;

//select value
const value = document.querySelector('#value');
const btns=document.querySelectorAll('.btn');
// console.log(btn)

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
       const styles = e.currentTarget.classList;
       if(styles.contains('decrease')){
        count--;
       }
       else if(styles.contains('increase')){
        count++
       }
       else{
        
       }
       value.textContent=count;
    })
})