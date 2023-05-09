let slide_box = document.querySelector('.box_first')
let slides = document.querySelector('.slider');
let slide = document.querySelectorAll('.slide');
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 704;
let slideMargin = 30;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

 

makeClone();

function makeClone(){
    for(let i = 0; i < slideCount; i++){
        //a.cloneNode(), a.cloneNode(true)
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone')
        slides.appendChild(cloneSlide);
    }

    for(var i = slideCount -1; i>=0; i--){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.prepend(b)
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        slides.classList.add('animated');
    }, 100);
}



function updateWidth(){
    var currentSlides = document.querySelectorAll('.slide');
    // var newSlideCount = currentSlides.length;
    var newWidth = slideWidth;
    slides.style.width = newWidth;
}

function setInitialPos(){
    var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
    //slides { transform:translateX(-1000px)}
    slides.style.transform = 'translateX(' + initialTranslateValue+'px)';
}

nextBtn.addEventListener('click', function(){
    moveSlide(currentIdx + 1);
})

prevBtn.addEventListener('click', function(){
    moveSlide(currentIdx - 1);
})

function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) +'px';
    currentIdx = num
    if(currentIdx == slideCount || currentIdx  == -slideCount){

        setTimeout(function(){
            slides.classList.remove('animated')
            slides.style.left = '0px'
            currentIdx = 0;
        },500);

        setTimeout(function(){
            slides.classList.add('animated');
        },600)
    }
}




// clearInterver(timer)

var timer = undefined;

function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            moveSlide(currentIdx + 1);
        }, 2000)
    }
}

autoSlide();

function stopSlide(){
    clearInterval(timer);

    timer = undefined;
    console.log(timer);
}

slide_box.addEventListener('mouseover', function(){
    stopSlide();
})

slide_box.addEventListener('mouseleave', function(){
    autoSlide();
})


// 스토리 더보기 클릭 버튼

const $box_five_btn = document.querySelector('.box_five_btn');
const $box_four = document.querySelector('.box_four');

$box_five_btn.addEventListener('click', function(){
    $box_four.classList.toggle('open');
    if ($box_four.classList.contains('open')) {
        $box_five_btn.innerHTML = "스토리 닫기 <i class='bi bi-chevron-up'></i>";
    } else {
        $box_five_btn.innerHTML = "스토리 열기 <i class='bi bi-chevron-down'></i>";
    }
});

