$(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  let sections1 = gsap.utils.toArray("main .laureate1-sect");
  let scrollTween1 = gsap.to(sections1, {
    xPercent: -100 * (sections1.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".laureate1-container",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000",
    },
  });

  let sections2 = gsap.utils.toArray("main .laureate2-sect");
  let scrollTween2 = gsap.to(sections2, {
    xPercent: -100 * (sections2.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".laureate2-container",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000",
    },
  });

  let sections3 = gsap.utils.toArray("main .laureate3-sect");
  let scrollTween3 = gsap.to(sections3, {
    xPercent: -100 * (sections3.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".laureate3-container",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000",
    },
  });

  let sections4 = gsap.utils.toArray("main .laureate4-sect");
  let scrollTween4 = gsap.to(sections4, {
    xPercent: -100 * (sections4.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".laureate4-container",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000",
    },
  });
});
