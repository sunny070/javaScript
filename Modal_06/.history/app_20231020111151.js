// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn=document.querySelector('.modal-btn');
const modalOverLay=document.querySelector('.modal-overlay');
const closeBtn=document.querySelector('.close-btn');

modalBtn.addEventListener('click',function(){
    modalOverLay.classList.add('open-modal')
})

closeBtn.addEventListener('click',function(){
    // if(modalOverLay.classList.contains('open-modal')){

    //     modalOverLay.classList.toggle('open-modal')
    // }
    // modalOverLay.classList.remove('open-modal')
})
