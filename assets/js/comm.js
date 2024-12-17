$(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // ***************************laureate 1 - 패트릭 아우어***************************
  let sections1 = gsap.utils.toArray("main .laureate1-sect");
  let section1_1 = document.querySelector(".laureate1-sect-1");
  let section1_2 = document.querySelector(".laureate1-sect-2");
  let section1_3 = document.querySelector(".laureate1-sect-3");
  let section1_4 = document.querySelector(".laureate1-sect-4");
  let section1_5 = document.querySelector(".laureate1-sect-5");
  let scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".laureate1-container",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+=6000",
      markers: true,
    },
  });
  // 타임라인
  scrollTimeline
    .set(section1_1, {
      opacity: 0,
    })
    .to(section1_1, { opacity: 1, duration: 0.05 })

    .to(sections1, {
      xPercent: -100 * (sections1.length - 1),
    });
  // section1_2 opacity 전환 추가
  gsap.fromTo(
    section1_2,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section1_2, // section1_2를 트리거로 설정
        containerAnimation: scrollTimeline, // 수평 스크롤 타임라인과 동기화
        start: "top center", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=100", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        // markers: true, // 디버깅용
      },
    }
  );
  // section1_3 opacity 전환 추가
  gsap.fromTo(
    section1_3,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section1_3, // section1_2를 트리거로 설정
        containerAnimation: scrollTimeline, // 수평 스크롤 타임라인과 동기화
        start: "start-=1000 center+=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        markers: true, // 디버깅용
      },
    }
  );
  // section1_5 opacity 전환 추가
  gsap.fromTo(
    section1_5,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section1_5, // section1_2를 트리거로 설정
        containerAnimation: scrollTimeline, // 수평 스크롤 타임라인과 동기화
        start: "start-=1000 center+=500", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        markers: true, // 디버깅용
      },
    }
  );

  // ***************************laureate 2 - 완지라 마타이***************************
  let sections2 = gsap.utils.toArray("main .laureate2-sect");
  let scrollTimeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".laureate2-container",
      pin: true,
      scrub: 1,
      //   start: "top top",
      end: "+=4500",
      markers: true,
    },
  });
  // 타임라인
  scrollTimeline2
    .set(sections2, {
      opacity: 0,
    })
    .to(sections2, { opacity: 1, duration: 0.05 })
    .to(sections2, {
      xPercent: -100 * (sections2.length - 1),
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

//   let scrollTween1 = gsap.to(sections1, {
//     xPercent: -100 * (sections1.length - 1),
//     ease: "none", // <-- IMPORTANT!
//     scrollTrigger: {
//       trigger: ".laureate1-container",
//       pin: true,
//       scrub: 0.1,
//       start: "top top",
//       //   snap: directionalSnap(1 / (sections.length - 1)),
//       end: "+=3000",
//     },
//   });
