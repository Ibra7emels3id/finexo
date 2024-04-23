// Scrole 
let scrole = document.getElementById(`scrole`);
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight ;

window.addEventListener(`scroll` , () =>{
    let scrolltop = document.documentElement.scrollTop ;
    scrole.style.width = `${(scrolltop / height) * 100}%` ;
})

// icon lest

let iconLest = document.getElementById(`iconLest`);
let lest = document.getElementById(`lest`);

iconLest.addEventListener(`click` , function(){
    lest.classList.toggle(`mainLe`)
})

// scroleTop 

let scroleop = document.getElementById(`scroleTop`);

window.onscroll = function(){
    console.log(this.scrollY);
    if(this.scrollY >= 500){
        scroleop.classList.add("show")
    }
    else{
        scroleop.classList.remove("show")
    }
}
scroleop.onclick = function (){
    window.scrollTo({
        top: 0 ,
        behavior: "smooth"
    })
}

// slider header 

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centerSlide: true,
    pagination: true,
    autoTimeout: 1000,
    autoplay:{
        delete:3000,
    },


        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });


    // search chick


    let btnSearchs = document.querySelectorAll(`#btnSearch`);
    let search = document.getElementById(`search`)
    let clossIcon = document.getElementById('clossIcon')

    btnSearchs.forEach(btnSearch => {
        btnSearch.addEventListener('click' , ()=> {
            search.classList.add('show-icon')
        });
    });
    
    clossIcon.addEventListener('click' , ()=> search.classList.remove('show-icon'));




    // swiper box
    let swiperr = new Swiper(".mySwipers", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        centerSlide: true,
        pagination: true,
        autoTimeout: 1000,
        autoplay:{
            delete: 1000,
        },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                100: {
                    slidesPerView: 1,
                    // spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    // spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    // spaceBetween: 20,
                },
            }
        });