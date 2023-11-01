const slide = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slide.forEach(function(slide,index){
    slide.style.left = `${index*100}%`
});

let counter = 0;
nextBtn.addEventListener('click',function(){
    counter++;
})


prevBtn.addEventListener('click',function(){
    counter--;
})


function carousel(){
    slide.forEach(function(slide){
        slide.style.transform
    })
}