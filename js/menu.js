const hamburguesa = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');
console.log(menu)
console.log(hamburguesa) 

hamburguesa.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})
window.addEventListener('click',e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target !=hamburguesa){
        menu.classList.toggle("spread") 
    }
})
