// function myFunction() {
//    var element = document.getElementById("demo");
// 	let open = document.getElementsByClassName("img1");
// 	let close = document.getElementsByClassName("img2");
// 	element.classList.toggle("d-none");
// }



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            // nav:true
        },
        600:{
            items:2,
            // nav:true
        },
        1000:{
            items:4,
            // nav:true,
            loop:true
        }
    }
})
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      autoplay:true,
    autoplayTimeout:1,
    autoplayHoverPause:true,
    items: 3,
      margin: 20,
      loop: true,
    //   nav: true
    });
  });
// Menu 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

    
// let btn1 = document.getElementById("btn1");
// let btn1 = document.getElementById("btn1");
// let btn1 = document.getElementById("btn1");

// function btn1(){
//     btn1.classL
// }