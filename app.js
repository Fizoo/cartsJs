
const slides=document.querySelectorAll('.slide')


slides.forEach(slide=>{
    slide.addEventListener('click',()=>{
        noActive()
        slide.classList.add('active')
        console.log('active')
    })
})
const noActive=()=>{
    slides.forEach((el)=>{
        el.classList.remove('active')
    })
}