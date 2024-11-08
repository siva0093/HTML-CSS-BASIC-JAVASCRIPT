

function navSlide(){
    const nav = document.querySelector(".nav-bar");
    const menu = document.querySelector(".nav-links");
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', ()=>{
        menu.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}

navSlide();



// const faqs = document.querySelectorAll(".faq")

// faqs.forEach((faq)=> {
//     faq.addEventListener("click", () => {
//         faq.classList.toggle("active");
//     });
// });