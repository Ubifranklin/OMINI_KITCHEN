// Initialize Swiper
let swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlidees: true,
  autoplay: {
    delay: 2500, // Autoplay delay in milliseconds
    disableOnInteraction: false, // Prevent autoplay from being stopped when user interacts with swiper
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Allow pagination bullets to be clickable
  },
  loop: true,
});
