//using selectors inside the element
// traversing the dom

const btn = document.querySelectorAll('.question-btn');

btn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        console.log(e.currentTarget.parentList);
    })
})