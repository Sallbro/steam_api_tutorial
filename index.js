//CREATE main.js IN THE FOLDER assets/js AND INSERT THE BELOW LINES

//Global variables
var element;

//Detect onclick event
if (window.matchMedia("(max-width: 920px)").matches === false) {
    $(".ham").on("click", function () {
        $("menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "99");
    });

    $(".close").on("click", function () {
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top", "-100%").fadeOut('100') : $("menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
    });

    $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top", "-100%").fadeOut('100') : $("menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
    });
} else {
    $(".ham").on("click", function () {
        $("menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "9");
    });

    $(".close").on("click", function () {
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top", "-100%").fadeOut('100') : $("menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
    });

    $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top", "-100%").fadeOut('100') : $("menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
    });
}


//Scroller Nav
window.onscroll = function () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color", "var(--primary)");
        $("nav").css("box-shadow", "0px 6px 16px -6px var(--dark)");
        $(".social_icons").addClass("social_icon");
        $(".social_icons").removeClass("social_icons");
        $(".RapidAPI").children("strong").hide("slow");
        $(".RapidAPI").children("img").css("margin-right", "0px");
    } else {
        $("nav").css("background-color", "transparent");
        $("nav").css("box-shadow", "0px 0px 0px 0px var(--dark)");
        $(".social_icon").addClass("social_icons");
        $(".social_icon").removeClass("social_icon");
        $(".RapidAPI").children("strong").show("slow");
        $(".RapidAPI").children("img").css("margin-right", "10px");
    }
}


//DETECT ESC KEY PRESSED
document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        if ($(".overlay").css("opacity") == "1") {
            $(".overlay").css("opacity", "0");
            $(".overlay").css("z-index", "-1");
        }
    }
};



//Dropdown
$(".dropdown").click(function () {
    if ($(this).children("aside").is(":hidden")) {
        $(this).children("aside").show("slow");
        $(this).children("a").css("color", "var(--white)");
    } else {
        $(this).children("aside").hide("slow");
        $(this).children("a").css("color", "var(--lite)");
    }
});


//Swiper for menu bar
var direction = "";
var oldx = 0;
var oldy = 0;
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
        if (touchendX < touchstartX) {
            $("menu").css("right", "0px");
            $(".overlay").css("opacity", "1");
            $(".overlay").css("z-index", "99");
        }
        if (touchendX > touchstartX) {
            $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top", "-100%").fadeOut('100') : $("menu").css("right", "-500px");
            $(".overlay").css("opacity", "0");
            $(".overlay").css("z-index", "-1");
        }
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    });

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    });
}

// copy single_product code 
function single_product_copycode() {

    //get the editor
    const codeElement = document.querySelector('pre code.single_product');
    const clipboard = navigator.clipboard;
    clipboard.writeText(codeElement.innerText)
        .then(() => {
            clipboard.readText().then((val) => {
                alert(val);
            });
            // statusElement.innerHTML = '<span aria-hidden="true">🎉</span> Code copied to clipboard!';
        })
        .catch(() => {
            // statusElement.innerHTML = '<span aria-hidden="true">🛑</span> There was an error copying the code. Try again!';
            alert('Error copying');
        });
}

//copy single_product style
function single_product_copystyle() {
    const style = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    
.blog-slider {
    width: 95%;
    position: relative;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 25px;
    border-radius: 25px;
    height: auto;
    transition: all 0.3s;
  
  }
  
  @media screen and (max-width: 768px) {
    .blog-slider {
      min-height: 500px;
      height: auto;
      margin: 180px auto;
    }
  }
  
  @media screen and (max-height: 500px) and (min-width: 992px) {
    .blog-slider {
      height: 350px;
    }
  }
  
  .blog-slider__item {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  @media screen and (max-width: 768px) {
    .blog-slider__item {
      flex-direction: column;
    }
  }
  
  .blog-slider__img {
    flex-shrink: 0;
    height: 300px;
    width: 600px;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 20px;
    transform: translateX(0px);
    overflow: hidden;
  }
  
  .blog-slider__img:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    border-radius: 20px;
    opacity: 0.8;
  }
  
  .blog-slider__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 1;
    border-radius: 20px;
    transition: all 0.3s;
  }
  
  @media screen and (max-width: 768px) {
    .blog-slider__img {
      transform: translateY(-50%);
      width: 90%;
    }
  }
  
  @media screen and (max-width: 576px) {
    .blog-slider__img {
      width: 95%;
    }
  }
  
  @media screen and (max-height: 500px) and (min-width: 992px) {
    .blog-slider__img {
      height: 270px;
    }
  }
  
  .blog-slider__content {
    padding-right: 25px;
  }
  
  @media screen and (max-width: 768px) {
    .blog-slider__content {
      margin-top: -80px;
      text-align: center;
      padding: 0 30px;
    }
  }
  
  @media screen and (max-width: 576px) {
    .blog-slider__content {
      padding: 0;
    }
  }
  
  .blog-slider__content>* {
    opacity: 1;
    transform: translateY(25px);
    transition: all 0.4s;
  }
  
  .blog-slider__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }
  
  .blog-slider__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }
  
  .blog-slider__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }
  
  .blog-slider__button {
    display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    text-decoration: none;
    font-weight: 500;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
  }
  
  @media screen and (max-width: 576px) {
    .blog-slider__button {
      width: 100%;
    }
  }
  
  .blog-slider .swiper-container-horizontal>.swiper-pagination-bullets,
  .blog-slider .swiper-pagination-custom,
  .blog-slider .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  
  .blog-slider__pagination {
    position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px !important;
    text-align: center;
    left: auto !important;
    top: 50%;
    bottom: auto !important;
    transform: translateY(-50%);
  }
  
  @media screen and (max-width: 768px) {
    .blog-slider__pagination {
      transform: translateX(-50%);
      left: 50% !important;
      top: 205px;
      width: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
  .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 8px 0;
  }
  
  @media screen and (max-width: 768px) {
    .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 0 5px;
    }
  }
  
  .blog-slider__pagination .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    display: block;
    border-radius: 10px;
    background: #062744;
    opacity: 0.2;
    transition: all 0.3s;
  }
  
  .blog-slider__pagination .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fd3838;
    height: 30px;
    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
  }
  
  @media screen and (max-width: 768px) {
    .blog-slider__pagination .swiper-pagination-bullet-active {
      height: 11px;
      width: 30px;
    }
  }
  
  /* system required tabs */
  .sys_tabs {
    position: relative;
    /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
    border-radius: 5px;
    margin: 5px 0px 5px 0px;
    width: 100%;
  }
  
  .sys_tabs input[name=sys-tab-control] {
    display: none;
  }
  
  .sys_tabs .sys_content section h2,
  .sys_tabs ul li label {
    font-family: "Montserrat";
    font-weight: bold;
    font-size: 18px;
    color: #428BFF;
  }
  
  .sys_tabs ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }
  
  .sys_tabs ul li {
    box-sizing: border-box;
    flex: 1;
    width: 25%;
    padding: 0 10px;
    text-align: center;
  }
  
  .sys_tabs ul li label {
    transition: all 0.3s ease-in-out;
    color: #929daf;
    padding: 5px auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .sys_tabs ul li label br {
    display: none;
  }
  
  .sys_tabs ul li label svg {
    fill: #929daf;
    height: 1.2em;
    vertical-align: bottom;
    margin-right: 0.2em;
    transition: all 0.2s ease-in-out;
  }
  
  .sys_tabs ul li label:hover,
  .sys_tabs ul li label:focus,
  .sys_tabs ul li label:active {
    outline: 0;
    color: #bec5cf;
  }
  
  .sys_tabs ul li label:hover svg,
  .sys_tabs ul li label:focus svg,
  .sys_tabs ul li label:active svg {
    fill: #bec5cf;
  }
  
  .sys_tabs .slider {
    position: relative;
    width: 25%;
    transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
  }
  
  .sys_tabs .slider .sys_indicator {
    position: relative;
    width: 60px;
    max-width: 100%;
    margin: 0 auto;
    height: 4px;
    background: #428BFF;
    border-radius: 1px;
  }
  
  .sys_tabs .sys_content {
    margin-top: 30px;
  }
  
  .sys_tabs .sys_content section {
    display: none;
    -webkit-animation-name: sys_content;
    animation-name: sys_content;
    -webkit-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    line-height: 1.4;
  }
  
  .sys_tabs .sys_content section h2 {
    color: #428BFF;
    display: none;
  }
  
  .sys_tabs .sys_content section h2::after {
    content: "";
    position: relative;
    display: block;
    width: 30px;
    height: 3px;
    background: #428BFF;
    margin-top: 5px;
    left: 1px;
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(1):checked~ul>li:nth-child(1)>label {
    cursor: default;
    color: #428BFF;
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(1):checked~ul>li:nth-child(1)>label svg {
    fill: #428BFF;
  }
  
  @media (max-width: 600px) {
    .sys_tabs input[name=sys-tab-control]:nth-of-type(1):checked~ul>li:nth-child(1)>label {
      background: rgba(0, 0, 0, 0.08);
    }
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(1):checked~.slider {
    transform: translateX(15%);
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(1):checked~.sys_content>section:nth-child(1) {
    display: block;
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(2):checked~ul>li:nth-child(2)>label {
    cursor: default;
    color: #428BFF;
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(2):checked~ul>li:nth-child(2)>label svg {
    fill: #428BFF;
  }
  
  @media (max-width: 600px) {
    .sys_tabs input[name=sys-tab-control]:nth-of-type(2):checked~ul>li:nth-child(2)>label {
      background: rgba(0, 0, 0, 0.08);
    }
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(2):checked~.slider {
    transform: translateX(150%);
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(2):checked~.sys_content>section:nth-child(2) {
    display: block;
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(3):checked~ul>li:nth-child(3)>label {
    cursor: default;
    color: #428BFF;
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(3):checked~ul>li:nth-child(3)>label svg {
    fill: #428BFF;
  }
  
  @media (max-width: 600px) {
    .sys_tabs input[name=sys-tab-control]:nth-of-type(3):checked~ul>li:nth-child(3)>label {
      background: rgba(0, 0, 0, 0.08);
    }
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(3):checked~.slider {
    transform: translateX(280%);
  }
  
  .sys_tabs input[name=sys-tab-control]:nth-of-type(3):checked~.sys_content>section:nth-child(3) {
    display: block;
  }
  
  @-webkit-keyframes sys_content {
    from {
      opacity: 0;
      transform: translateY(5%);
    }
  
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  
  @keyframes sys_content {
    from {
      opacity: 0;
      transform: translateY(5%);
    }
  
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  
  @media (max-width: 1000px) {
    .sys_tabs ul li label {
      white-space: initial;
    }
  
    .sys_tabs ul li label br {
      display: initial;
    }
  
    .sys_tabs ul li label svg {
      height: 1.5em;
    }
  }
  
  @media (max-width: 600px) {
    .sys_tabs ul li label {
      padding: 5px;
      border-radius: 5px;
    }
  
    .sys_tabs ul li label span {
      display: none;
    }
  
    .sys_tabs .slider {
      display: none;
    }
  
    .sys_tabs .sys_content {
      margin-top: 20px;
    }
  
    .sys_tabs .sys_content section h2 {
      display: block;
    }
  }
  
  .game_area_sys_req_full {
    display: block;
  }
  
  .game_area_sys_req_full ul {
    display: contents;
  }
  
  @media (min-width: 801px) {
    .game_area_sys_req_full ul {
      display: flex;
    }
  }
  
  .game_area_sys_req_full ul li {
    text-align: start;
    margin-bottom: 3px;
  }
  
  @media (max-width: 800px) {
    .game_area_sys_req_full ul li {
      display: contents;
    }
  }
  
  .game_area_sys_req_full ul ul {
    display: block;
  }
  
  .game_area_sys_req_full ul ul li {
    display: flex;
    width: 100%;
    margin-bottom: .8rem;
    text-align: start;
  }
    </style>
</head>
<body>
<div class="blog-slider">
<div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">

            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                alt="">
        </div>
        <div class="blog-slider__content">
            <span class="blog-slider__code">26 December 2019</span>
            <div class="blog-slider__title">Lorem Ipsum Dolor</div>
            <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Recusandae voluptate repellendus magni illo ea
                animi?
            </div>
            <div class="sys_tabs">
                <input type="radio" id="sys_tab1" name="sys-tab-control" checked>
                <input type="radio" id="sys_tab2" name="sys-tab-control">
                <input type="radio" id="sys_tab3" name="sys-tab-control">
                <ul>
                    <li title="Window">
                        <label for="sys_tab1" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="bi bi-windows" viewBox="0 0 16 16"
                                style="fill: #1b1b1b;opacity: 0.8;">
                                <path
                                    d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z" />
                            </svg>
                            <br>
                            <span>Window</span>
                        </label>
                    </li>
                    <li title="Linux"><label for="sys_tab2" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style="fill: #1b1b1b;opacity: 0.8;"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z" />
                            </svg>
                            <br><span>Linux</span></label></li>
                    <li title="Mac">
                        <label for="sys_tab3" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="bi bi-apple" viewBox="0 0 16 16"
                                style="fill: #1b1b1b;opacity: 0.8;">
                                <path
                                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                                <path
                                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
                            </svg>
                            <br><span>Mac</span></label>
                    </li>
                </ul>

                <div class="slider">
                    <div class="sys_indicator"></div>
                </div>
                <div class="sys_content">
                    <section>
                        <h2>Window</h2>
                        <div class="game_area_sys_req_full">
                            <ul>
                                <li>
                                    <strong>Minimum:</strong><br>
                                    <ul class="bb_ul">
                                        <li><strong>OS: </strong> Windows 7 or
                                            newer<br>
                                        </li>
                                        <li><strong>Processor: </strong> Dual core
                                            from
                                            Intel or AMD at 2.8 GHz<br></li>
                                        <li><strong>Memory: </strong> 4 GB RAM<br>
                                        </li>
                                        <li><strong>Graphics: </strong> NVIDIA
                                            GeForce
                                            8600/9600GT, ATI/AMD Radeon
                                            HD2600/3600<br>
                                        </li>
                                        <li><strong>DirectX: </strong> Version
                                            11<br>
                                        </li>
                                        <li><strong>Network: </strong> Broadband
                                            Internet
                                            connection<br></li>
                                        <li><strong>Storage: </strong> 60 GB
                                            available
                                            space<br></li>
                                        <li><strong>Sound Card: </strong> DirectX
                                            Compatible</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Recommanded:</strong><br>
                                    <ul class="bb_ul">
                                        <li><strong>OS: </strong> Windows 7 or
                                            newer<br>
                                        </li>
                                        <li><strong>Processor: </strong> Dual core
                                            from
                                            Intel or AMD at 2.8 GHz<br></li>
                                        <li><strong>Memory: </strong> 4 GB RAM<br>
                                        </li>
                                        <li><strong>Graphics: </strong> NVIDIA
                                            GeForce
                                            8600/9600GT, ATI/AMD Radeon
                                            HD2600/3600<br>
                                        </li>
                                        <li><strong>DirectX: </strong> Version
                                            11<br>
                                        </li>
                                        <li><strong>Network: </strong> Broadband
                                            Internet
                                            connection<br></li>
                                        <li><strong>Storage: </strong> 60 GB
                                            available
                                            space<br></li>
                                        <li><strong>Sound Card: </strong> DirectX
                                            Compatible</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h2>Linux</h2>
                    </section>
                    <section>
                        <h2>Mac</h2>
                    </section>
                </div>
            </div>
        </div>

    </div>

</div>
</div>
</body>
</html>
    `
    const clipboard = navigator.clipboard;
    clipboard.writeText(style)
        .then(() => {
            alert('Success copy');
            // statusElement.innerHTML = '<span aria-hidden="true">🎉</span> Code copied to clipboard!';
        })
        .catch(() => {
            // statusElement.innerHTML = '<span aria-hidden="true">🛑</span> There was an error copying the code. Try again!';
            alert('Error copying');
        });
}

// copy page code 
function page_copycode() {

  //get the editor
  const codeElement = document.querySelector('pre code.page');
  const clipboard = navigator.clipboard;
  clipboard.writeText(codeElement.innerText)
      .then(() => {
          clipboard.readText().then((val) => {
              alert(val);
          });
          // statusElement.innerHTML = '<span aria-hidden="true">🎉</span> Code copied to clipboard!';
      })
      .catch(() => {
          // statusElement.innerHTML = '<span aria-hidden="true">🛑</span> There was an error copying the code. Try again!';
          alert('Error copying');
      });
}

// copy page style 
function page_copystyle() {
  const style = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .products {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 20px 20px;
              width: 100%;
              height: auto;
              margin-top: 50px;
          }
  
          .products>div {
              flex: 1;
              padding: 40px 10px;
              border-radius: 20px;
              box-shadow: 1px 20px 20px rgba(0, 0, 0, 0.1),
                  -1px -1px 20px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
  
          .products h4 {
              padding-top: 10px;
              min-height: 55px;
          }
  
          .products h1 {
              display: flex;
              justify-content: center;
              align-items: center;
          }
  
          .products img {
              max-width: 120px;
              height: 120px;
              object-fit: cover;
              border-radius: 50%;
          }
  
          @media (max-width: 1100px) {
              .products {
                  grid-template-columns: repeat(3, 1fr);
              }
          }
  
  
          @media (max-width: 767px) {
  
              .products {
                  grid-template-columns: repeat(2, 1fr);
                  margin-top: 20px;
              }
  
              .products>div {
                  padding: 30px 10px;
              }
  
              .products img {
                  max-width: 80px;
                  height: 80px;
              }
          }
  
          @media (max-width: 400px) {
  
              .products {
                  grid-template-columns: repeat(1, 1fr);
                  margin-top: 20px;
              }
  
              .products>div {
                  padding: 30px 10px;
              }
  
              .products img {
                  max-width: 80px;
                  height: 80px;
              }
          }
      </style>
  </head>
  
  <body>
      <div style="width: 100%">
          <div class="products">
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1683566799" alt="" />
                  <h3>Aug 21, 2012</h3>
                  <h4>Counter-Strike: Global Offensive</h4>
                  <span>Free to Play</span>
              </div>
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg?t=1684966156" alt="" />
                  <h3>Oct 1, 2019</h3>
                  <h4>Destiny 2</h4>
                  <span>Free to Play</span>
              </div>
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/1304930/header.jpg?t=1684452998" alt="" />
                  <h3>May 18, 2023</h3>
                  <h4>The Outlast Trials</h4>
                  <span>$29.99</span>
              </div>
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/1268750/header.jpg?t=1684348979" alt="" />
                  <h3>May 17, 2023</h3>
                  <h4>Starship Troopers: Extermination</h4>
                  <span>$29.99</span>
              </div>
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1685123076" alt="" />
                  <h3>Nov 4, 2020</h3>
                  <h4>Apex Legends™</h4>
                  <span>Free to Play</span>
              </div>
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg?t=1678222947" alt="" />
                  <h3>Feb 11, 2022</h3>
                  <h4>Lost Ark</h4>
                  <span>Free To Play</span>
              </div>
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/2005010/header.jpg?t=1685030541" alt="" />
                  <h3>Warhammer 40,000: Boltgun</h3>
                  <h4>May 23, 2023</h4>
                  <span>$19.79</span>
              </div>
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg?t=1684446457" alt="" />
                  <h3>Oct 27, 2022</h3>
                  <h4>Call of Duty®: Modern Warfare® II</h4>
                  <span>$69.99</span>
              </div>
              <div>
                  <img src="https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg?t=1684438098" alt="" />
                  <h3>Mar 25, 2013</h3>
                  <h4>Warframe</h4>
                  <span>Free to Play</span>
              </div>
              <h1>And Many More...</h1>
          </div>
      </div>
  </body>
  
  </html>
  `;
  const clipboard = navigator.clipboard;
  clipboard.writeText(style)
      .then(() => {
          alert('Success copy');
          // statusElement.innerHTML = '<span aria-hidden="true">🎉</span> Code copied to clipboard!';
      })
      .catch(() => {
          // statusElement.innerHTML = '<span aria-hidden="true">🛑</span> There was an error copying the code. Try again!';
          alert('Error copying');
      });
}

// copy search code 
function search_copycode() {

  //get the editor
  const codeElement = document.querySelector('pre code.search');
  const clipboard = navigator.clipboard;
  clipboard.writeText(codeElement.innerText)
      .then(() => {
          clipboard.readText().then((val) => {
              alert(val);
          });
          // statusElement.innerHTML = '<span aria-hidden="true">🎉</span> Code copied to clipboard!';
      })
      .catch(() => {
          // statusElement.innerHTML = '<span aria-hidden="true">🛑</span> There was an error copying the code. Try again!';
          alert('Error copying');
      });
}

// copy search style 
function search_copystyle() {
  const style = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .products {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px 20px;
            width: 100%;
            height: auto;
            margin-top: 50px;
        }

        .products>div {
            flex: 1;
            padding: 40px 10px;
            border-radius: 20px;
            box-shadow: 1px 20px 20px rgba(0, 0, 0, 0.1),
                -1px -1px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .products h4 {
            padding-top: 10px;
            min-height: 55px;
        }

        .products h1 {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .products img {
            max-width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 50%;
        }

        @media (max-width: 1100px) {
            .products {
                grid-template-columns: repeat(3, 1fr);
            }
        }


        @media (max-width: 767px) {

            .products {
                grid-template-columns: repeat(2, 1fr);
                margin-top: 20px;
            }

            .products>div {
                padding: 30px 10px;
            }

            .products img {
                max-width: 80px;
                height: 80px;
            }
        }

        @media (max-width: 400px) {

            .products {
                grid-template-columns: repeat(1, 1fr);
                margin-top: 20px;
            }

            .products>div {
                padding: 30px 10px;
            }

            .products img {
                max-width: 80px;
                height: 80px;
            }
        }
    </style>
</head>

<body>
    <div style="width: 100%">
        <div class="products">
            <div>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1683566799" alt="" />
                <h4>Counter-Strike: Global Offensive</h4>
                <span>Free to Play</span>
            </div>
            <div>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/666220/header.jpg?t=1685652509" alt="" />
                <h4>CS2D</h4>
                <span>Free to Play</span>
            </div>
            <div>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/256576/header.jpg?t=1447360141" alt="" />
                <h4>CSX ES44AC Add-on Livery</h4>
                <span>₹ 259</span>
            </div>
            <div>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/256611/header.jpg?t=1447361103" alt="" />
                <h4>CSX SD70MAC Add-on Livery</h4>
                <span>₹ 259</span>
            </div>
            <div>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/893650/header.jpg?t=1559495516" alt="" />
                <h4>CSI VR: Crime Scene Investigation</h4>
                <span>₹ 199</span>
            </div>
            <div>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/501060/header.jpg?t=1469729350" alt="" />
                <h4>C.S.S. CITADEL VR</h4>
                <span>₹ 349</span>
            </div>
        </div>
    </div>
</body>

</html>
  `;
  const clipboard = navigator.clipboard;
  clipboard.writeText(style)
      .then(() => {
          alert('Success copy');
          // statusElement.innerHTML = '<span aria-hidden="true">🎉</span> Code copied to clipboard!';
      })
      .catch(() => {
          // statusElement.innerHTML = '<span aria-hidden="true">🛑</span> There was an error copying the code. Try again!';
          alert('Error copying');
      });
}