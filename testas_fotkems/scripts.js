// const container = document.getElementById("myCarousel");
// const options = { axis: "x" };

// new Carousel(container, options)

new Carousel(document.getElementById("myCarousel1"), {
 
  Autoplay : {
    timeout : 1000
  }
}, {
  Autoplay
});


Fancybox.bind("[data-fancybox]"), {
  loop: true,
  animationEffect: "fade",
  animationDuration: 1000,

}