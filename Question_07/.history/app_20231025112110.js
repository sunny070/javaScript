//using selectors inside the element
const questions = document.querySelectorAll('.question');
// console.log(questions);
questions.forEach(function(question){
    // console.log(question)
    const btn = question.querySelector(".question-btn");
    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if
        })
        question.classList.toggle('show-text')
    })
})

// traversing the dom

// const btn = document.querySelectorAll('.question-btn');

// btn.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question=e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })