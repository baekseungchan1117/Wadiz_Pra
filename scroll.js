const $box_first_title13 = document.querySelector('.box_first_title13')
const $box_first_title13_1 = document.querySelector('.box_first_title13_1')

window.addEventListener("scroll", (e)=> {
    let scrollY = this.scrollY;
    if (scrollY > 1288) {
        $box_first_title13.style.position = "";
        $box_first_title13_1.style.height = "75rem";
 
    } else if (scrollY > 970) {
        $box_first_title13.style.position = "fixed";
        $box_first_title13.style.width = "480px";
        $box_first_title13.style.top = "-820px";
        $box_first_title13_1.style.height = "56rem";
    } else {
        $box_first_title13.style.position = "";
        $box_first_title13.style.width = "";
        $box_first_title13.style.top = "";
        $box_first_title13_1.style.height = "";
    }
    

    console.log(scrollY);
})


