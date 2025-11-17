const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    // lerp:1
});



// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const hmbrger = document.getElementById("hamburger");
const nvlist = document.getElementById("nav-list");

hmbrger.addEventListener("click", ()=>{
     nvlist.classList.toggle("nav-list-active");
})
