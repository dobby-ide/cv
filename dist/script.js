import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
console.clear();
gsap.registerPlugin(ScrollTrigger);
console.log(gsap);
let sections = gsap.utils.toArray('.photosidebar__card');
console.log(sections);
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.phosidebar',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: '+=1000',
  },
});