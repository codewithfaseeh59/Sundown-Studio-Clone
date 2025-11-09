

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function elementContainerAnime() {

    let elemContainer = document.querySelector("#elem-container")
    let fixedImage = document.querySelector("#fixed-image")
    elemContainer.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block"
    })
    elemContainer.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none"
    })


    let elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let imageData = e.getAttribute("data-image")
            fixedImage.style.backgroundImage = `url(${imageData})`
        })
    })

}


function blackBoxAnime() {
    let tabHeadings = document.querySelectorAll('.black-box .tabs h2');
    let designImage = document.querySelector('.black-box img');

    let designTab = document.querySelector('.black-box .tabs h2.design');
    if (designTab) {
        designTab.style.right = '2vw';
        designTab.querySelector('a').style.color = '#EFEAE3';
    }

    tabHeadings.forEach(heading => {
        heading.addEventListener('click', function (e) {
            e.preventDefault();

            tabHeadings.forEach(h => {
                h.querySelector('a').style.color = '#504A45';
                h.style.right = '0vw';
            });

            this.querySelector('a').style.color = '#EFEAE3';
            this.style.right = '2vw';

            let imgSrc = this.getAttribute('data-img');
            if (imgSrc) {
                designImage.src = imgSrc;
            }
        });
    });

}


function swiperAnime() {

    let swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 50,

    });

}


function pageLoaderAnime() {

    var loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)




}




pageLoaderAnime()
swiperAnime()
elementContainerAnime()
blackBoxAnime()

