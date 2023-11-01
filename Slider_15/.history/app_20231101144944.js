const slide = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slide.forEach(function(slide,index){
    slide.style.left = `$`
})