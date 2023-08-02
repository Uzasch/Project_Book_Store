
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active')
}

window.onscroll = () =>{
    if(window.scrollY >80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active')      
    }
}

window.onload = () =>{
    if(window.scrollY >80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active')      
    }
}

$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 2, // Display 4 images at the same time
        slidesToScroll: 1,
        centerMode:true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
