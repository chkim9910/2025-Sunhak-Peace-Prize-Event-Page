$(function () {
  AOS.init();
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // ***************************슬로건 섹션***************************
  let sectionSlogan = document.querySelector(".slogan-sect");
  let line1_1 = document.querySelector(".line-1");
  let line1_2 = document.querySelector(".line-2");
  let line1_3 = document.querySelector(".line-3");
  let line1_4 = document.querySelector(".line-4");
  let text1_1 = document.querySelector(".text-1");
  let text1_2 = document.querySelector(".text-2");
  let text1_3 = document.querySelector(".text-3");
  let slogan_container = document.querySelector(".slogan");
  let slogan_1 = document.querySelector(".slogan .text_1");
  let slogan_2 = document.querySelector(".slogan .text_2");
  let slogan_3 = document.querySelector(".slogan .text_3");

  let scrollTimeline_slogan_desc = gsap.timeline({
    scrollTrigger: {
      trigger: ".slogan-sect .text-wrap",
      scrub: 1,
      start: "top center+=300",
      end: "+=1200",
      // markers: true,
    },
  });
  // 타임라인
  scrollTimeline_slogan_desc
    .fromTo(
      text1_1,
      {
        opacity: 0,
        duration: 0.02,
      },
      { opacity: 1 }
    )
    .fromTo(
      text1_2,
      {
        opacity: 0,
        duration: 0.02,
      },
      { opacity: 1 }
    )
    .fromTo(
      text1_3,
      {
        opacity: 0,
        duration: 0.02,
      },
      { opacity: 1 }
    );

  let scrollTimeline_slogan = gsap.timeline({
    scrollTrigger: {
      trigger: ".slogan-sect .slogan",
      pin: true,
      scrub: 1,
      start: "top top+=100",
      end: "+=1000",
      // markers: true,
    },
  });
  // 타임라인
  scrollTimeline_slogan
    .fromTo(
      slogan_1,
      {
        opacity: 0,
        duration: 0.03,
      },
      { opacity: 1 }
    )
    .fromTo(
      slogan_2,
      {
        opacity: 0,
        duration: 0.03,
      },
      { opacity: 1 }
    )
    .fromTo(
      slogan_3,
      {
        opacity: 0,
        duration: 0.03,
      },
      { opacity: 1 }
    );

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
      // markers: true,
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
        // markers: true, // 디버깅용
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
        start: "start-=2500 center+=500", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        // markers: true, // 디버깅용
      },
    }
  );

  // ***************************laureate 2 - 완지라 마타이***************************
  let sections2 = gsap.utils.toArray("main .laureate2-sect");
  let section2_1 = document.querySelector(".laureate2-sect-1");
  let section2_2 = document.querySelector(".laureate2-sect-2");
  let section2_3 = document.querySelector(".laureate2-sect-3");
  let section2_4 = document.querySelector(".laureate2-sect-4");
  let section2_5 = document.querySelector(".laureate2-sect-5");
  let scrollTimeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".laureate2-container",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+=6000",
      markers: true,
    },
  });
  // 타임라인
  scrollTimeline2
    .set(section2_1, {
      opacity: 0,
    })
    .to(section2_1, { opacity: 1, duration: 0.05 })
    .to(sections2, {
      xPercent: -100 * (sections2.length - 1),
    });

  // section2_2 opacity 전환 추가
  gsap.fromTo(
    section2_2,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section2_2, // section2_2를 트리거로 설정
        containerAnimation: scrollTimeline2, // 수평 스크롤 타임라인과 동기화
        start: "top center", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=100", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        markers: true, // 디버깅용
      },
    }
  );
  // section2_3 opacity 전환 추가
  gsap.fromTo(
    section2_3,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section2_3, // section2_3를 트리거로 설정
        containerAnimation: scrollTimeline2, // 수평 스크롤 타임라인과 동기화
        start: "start-=1000 center+=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        // markers: true, // 디버깅용
      },
    }
  );
  // section2_5 opacity 전환 추가
  gsap.fromTo(
    section2_5,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section2_5, // section2_5를 트리거로 설정
        containerAnimation: scrollTimeline2, // 수평 스크롤 타임라인과 동기화
        start: "start-=1000 center+=500", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        // markers: true, // 디버깅용
      },
    }
  );

  // ***************************laureate 3 - 휴 에반스***************************
  let sections3 = gsap.utils.toArray("main .laureate3-sect");
  let section3_1 = document.querySelector(".laureate3-sect-1");
  let section3_2 = document.querySelector(".laureate3-sect-2");
  let section3_3 = document.querySelector(".laureate3-sect-3");
  let section3_4 = document.querySelector(".laureate3-sect-4");
  let section3_5 = document.querySelector(".laureate3-sect-5");
  let scrollTimeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".laureate3-container",
      pin: true,
      scrub: 1,
      //   start: "top top",
      end: "+=4500",
      markers: true,
    },
  });
  // 타임라인
  scrollTimeline3
    .set(sections3, {
      opacity: 0,
    })
    .to(sections3, { opacity: 1, duration: 0.05 })
    .to(sections3, {
      xPercent: -100 * (sections3.length - 1),
    });

  // section3_2 opacity 전환 추가
  gsap.fromTo(
    section3_2,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section3_2, // section3_2를 트리거로 설정
        containerAnimation: scrollTimeline3, // 수평 스크롤 타임라인과 동기화
        start: "top center", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=100", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        markers: true, // 디버깅용
      },
    }
  );
  // section3_3 opacity 전환 추가
  gsap.fromTo(
    section3_3,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section3_3, // section3_3를 트리거로 설정
        containerAnimation: scrollTimeline3, // 수평 스크롤 타임라인과 동기화
        start: "start-=1000 center+=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        // markers: true, // 디버깅용
      },
    }
  );
  // section3_5 opacity 전환 추가
  gsap.fromTo(
    section3_5,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section3_5, // section3_5를 트리거로 설정
        containerAnimation: scrollTimeline3, // 수평 스크롤 타임라인과 동기화
        start: "start-=1000 center+=500", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        // markers: true, // 디버깅용
      },
    }
  );

  // ***************************laureate 4 - 보얀 슬랫***************************
  let sections4 = gsap.utils.toArray("main .laureate4-sect");
  let section4_1 = document.querySelector(".laureate4-sect-1");
  let section4_2 = document.querySelector(".laureate4-sect-2");
  let section4_3 = document.querySelector(".laureate4-sect-3");
  let section4_4 = document.querySelector(".laureate4-sect-4");
  let section4_5 = document.querySelector(".laureate4-sect-5");
  let scrollTimeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".laureate4-container",
      pin: true,
      scrub: 1,
      //   start: "top top",
      end: "+=4500",
      markers: true,
    },
  });
  // 타임라인
  scrollTimeline4
    .set(sections4, {
      opacity: 0,
    })
    .to(sections4, { opacity: 1, duration: 0.05 })
    .to(sections4, {
      xPercent: -100 * (sections4.length - 1),
    });

  // section4_2 opacity 전환 추가
  gsap.fromTo(
    section4_2,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section4_2, // section4_2를 트리거로 설정
        containerAnimation: scrollTimeline4, // 수평 스크롤 타임라인과 동기화
        start: "top center", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=100", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        markers: true, // 디버깅용
      },
    }
  );
  // section4_3 opacity 전환 추가
  gsap.fromTo(
    section2_3,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section4_3, // section4_3를 트리거로 설정
        containerAnimation: scrollTimeline4, // 수평 스크롤 타임라인과 동기화
        start: "start-=1000 center+=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        // markers: true, // 디버깅용
      },
    }
  );
  // section4_5 opacity 전환 추가
  gsap.fromTo(
    section4_5,
    { opacity: 0 }, // 초기 상태
    {
      opacity: 1, // 뷰포트 진입 시
      duration: 2,
      scrollTrigger: {
        trigger: section4_5, // section4_5를 트리거로 설정
        containerAnimation: scrollTimeline4, // 수평 스크롤 타임라인과 동기화
        start: "start-=1000 center+=500", // 섹션이 뷰포트 중심에 도달할 때 시작
        end: "center center+=200", // 약간의 여유를 둔 후 종료
        scrub: true, // 스크롤에 따라 부드럽게 전환
        // markers: true, // 디버깅용
      },
    }
  );
  // gsap.fromTo(
  //   section4_5,
  //   { opacity: 1 }, // 초기 상태{
  //   {
  //     opacity: 0, // 뷰포트 진입 시
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: section4_5, // section4_5를 트리거로 설정
  //       containerAnimation: scrollTimeline4, // 수평 스크롤 타임라인과 동기화
  //       start: "top center", // 섹션이 뷰포트 중심에 도달할 때 시작
  //       end: "top center", // 약간의 여유를 둔 후 종료
  //       scrub: true, // 스크롤에 따라 부드럽게 전환
  //       // markers: true, // 디버깅용
  //     },
  //   }
  // );

  // ***************************갤러리 슬라이드***************************
  var swiper = new Swiper(".img-slide", {
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// ***************************배너***************************
