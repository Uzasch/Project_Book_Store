
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

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "") {
        alert("Please enter your username.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    // Add additional validation if needed

    return true;
}


$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 2, 
        slidesToScroll: 2,
        centerMode:false,
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


$(document).ready(function() {
    $('.slider2').slick({
        slidesToShow: 4, // Display 4 images at the same time
        slidesToScroll: 1,
        centerMode:true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {   
                
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {   
                
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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


$(document).ready(function() {
    $('.slider3').slick({
        slidesToShow: 4, // Display 4 images at the same time
        slidesToScroll: 3,
        centerMode:true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        responsive: [
            {   
                
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {   
                
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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


$(document).ready(function() {
    $('.slider4').slick({
        slidesToShow: 4, // Display 4 images at the same time
        slidesToScroll: 3,
        centerMode:true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        responsive: [
            {   
                
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {   
                
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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


