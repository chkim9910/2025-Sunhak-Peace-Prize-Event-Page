// ***************************팝업창 날짜 설정, 동작 함수***************************
// Function to check if today is the target date
function isTargetDate() {
  const targetDate = new Date(2025, 0, 11); // 2025년 1월 15일 (월은 0부터 시작)
  const today = new Date();
  return (
    today.getFullYear() === targetDate.getFullYear() &&
    today.getMonth() === targetDate.getMonth() &&
    today.getDate() === targetDate.getDate()
  );
}
// Function to show the popup
function showPopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popup-overlay");

  // 애니메이션 효과 추가
  popup.style.opacity = 1;
  overlay.style.opacity = 1;
  popup.style.transition = "opacity 0.5s ease";
  overlay.style.transition = "opacity 0.5s ease";
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popup-overlay");
  popup.style.display = "none";
  overlay.style.display = "none";
}

$(function () {
  AOS.init();
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // TweenMax.staggerFrom(
  //   ".block",
  //   0.5,
  //   {
  //     width: "0%",
  //     ease: Power1.easeIn,
  //     delay: 0.5,
  //   },
  //   0.04
  // );

  TweenMax.to("html", 0.1, {
    overflow: "hidden",
    // delay: 2,
  });
  TweenMax.to(".block", 1, {
    opacity: 0,
    // delay: 2,
  });

  TweenMax.to(".loader", 1, {
    opacity: 1,
    ease: Power1.easeIn,
    delay: 0.5,
    // delay: 3.8,
  });
  TweenMax.to(".loader", 1, {
    opacity: 0,
    ease: Power1.easeIn,
    delay: 2.4,
    // delay: 6,
  });
  TweenMax.to(".wrap", 1, {
    opacity: 1,
    ease: Power1.easeIn,
    delay: 3.6,
    // delay: 6.8,
  });
  TweenMax.to(".start", 1, {
    display: "none",
    ease: Power1.easeIn,
    delay: 3.6,
    // delay: 6.8,
  });
  TweenMax.to("html", 0.1, {
    overflow: "auto",
    delay: 5,
    onComplete: function () {
      // HTML 활성화 이후 팝업 표시
      if (isTargetDate()) {
        showPopup(); // 팝업 표시
      }
    },
  });

  // ***************************헤더***************************
  let header = document.querySelector("#header");
  let scrollTimelineHeader = gsap.timeline({
    scrollTrigger: {
      trigger: header,
      scrub: 1,
      start: "top top",
      end: "+=80",
    },
  });
  // 타임라인
  scrollTimelineHeader.to(header, { y: -100, duration: 0.5 });

  // ***************************슬로건 섹션***************************
  let sectionSlogan = document.querySelector(".slogan-sect");
  // let sectionSlogan2 = document.querySelector(".slogan2-sect");
  let text1_1 = document.querySelector(".slogan-sect .text-1");
  let text1_2 = document.querySelector(".slogan-sect .text-2");
  let text1_3 = document.querySelector(".slogan-sect .text-3");
  let slogan_container = document.querySelector(".slogan2-sect .slogan");
  let slogan_1 = document.querySelector(".slogan2-sect .slogan .text_1");
  let slogan_2 = document.querySelector(".slogan2-sect .slogan .text_2");
  let slogan_3 = document.querySelector(".slogan2-sect .slogan .text_3");
  let slogan_4 = document.querySelector(".slogan2-sect .slogan .text_4");

  // // 미디어 쿼리 매칭
  ScrollTrigger.matchMedia({
    // For screens wider than 800px
    "(min-width: 769px)": function () {
      let scrollTimeline_slogan_desc = gsap.timeline({
        scrollTrigger: {
          trigger: ".slogan-sect .text-wrap",
          scrub: 1,
          start: "top center+=300",
          end: "+=900",
        },
      });
      // Timeline for slogan description
      scrollTimeline_slogan_desc
        .fromTo(
          text1_1,
          { x: -100, opacity: 0, duration: 0.05 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          text1_2,
          { x: 100, opacity: 0, duration: 0.05 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          text1_3,
          { x: 100, opacity: 0, duration: 0.05 },
          { x: 0, opacity: 1 }
        );

      let scrollTimeline_slogan = gsap.timeline({
        scrollTrigger: {
          trigger: ".slogan-sect .slogan",
          // pin: true,
          scrub: 1,
          start: "top center+=100",
          // start: "top top",
          end: "+=800",
          // end: "+=500",
        },
      });
      // Timeline for the slogan
      scrollTimeline_slogan
        .fromTo(slogan_1, { opacity: 0, duration: 0.2 }, { opacity: 1 })
        .fromTo(slogan_2, { opacity: 0, duration: 0.2 }, { opacity: 1 })
        // .to(slogan_container, {
        //   "--before-opacity": 1,
        //   duration: 0.5,
        // })
        .fromTo(slogan_3, { opacity: 0, duration: 0.2 }, { opacity: 1 })
        .fromTo(slogan_4, { opacity: 0, duration: 0.2 }, { opacity: 1 });
      // .to(slogan_container, {
      //   opacity: 0,
      //   duration: 0.01,
      // });
    },

    // For screens between 480px and 799px
    "(max-width: 768px) and (min-width: 480px)": function () {
      let scrollTimeline_slogan_desc = gsap.timeline({
        scrollTrigger: {
          trigger: ".slogan-sect .text-wrap",
          scrub: 0.3,
          start: "top center+=100",
          end: "+=800",
        },
      });
      // Timeline for slogan description on smaller screens
      scrollTimeline_slogan_desc
        .fromTo(
          text1_1,
          { x: -40, opacity: 0, duration: 0.02 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          text1_2,
          { x: 40, opacity: 0, duration: 0.02 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          text1_3,
          { x: 40, opacity: 0, duration: 0.02 },
          { x: 0, opacity: 1 }
        );

      let scrollTimeline_slogan = gsap.timeline({
        scrollTrigger: {
          trigger: ".slogan-sect .slogan",
          // pin: true,
          scrub: 1,
          start: "top center+=80",
          // start: "top top",
          end: "+=1000",
          // end: "+=1300",
        },
      });
      // Timeline for the slogan on smaller screens
      scrollTimeline_slogan
        .fromTo(slogan_1, { opacity: 0, duration: 0.02 }, { opacity: 1 })
        .fromTo(slogan_2, { opacity: 0, duration: 0.02 }, { opacity: 1 })
        .to(slogan_container, {
          "--before-opacity": 1,
          duration: 0.2,
        })
        .fromTo(slogan_3, { opacity: 0, duration: 0.02 }, { opacity: 1 })
        .fromTo(slogan_4, { opacity: 0, duration: 0.01 }, { opacity: 1 });
      // .to(slogan_container, {
      //   opacity: 0,
      //   duration: 0.5,
      // });
    },

    // For screens smaller than 480px
    "(max-width: 479px)": function () {
      let scrollTimeline_slogan_desc = gsap.timeline({
        scrollTrigger: {
          trigger: ".slogan-sect .text-wrap",
          scrub: 1,
          start: "top center+=100",
          end: "+=400",
        },
      });
      // Timeline for slogan description on small screens
      scrollTimeline_slogan_desc
        .fromTo(
          text1_1,
          { x: -30, opacity: 0, duration: 0.05 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          text1_2,
          { x: 30, opacity: 0, duration: 0.05 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          text1_3,
          { x: 30, opacity: 0, duration: 0.05 },
          { x: 0, opacity: 1 }
        );

      let scrollTimeline_slogan = gsap.timeline({
        scrollTrigger: {
          trigger: ".slogan-sect .slogan",
          // pin: true,
          scrub: 1,
          start: "top center+=400",
          // start: "top top",
          end: "+=800",
        },
      });
      // Timeline for the slogan on very small screens
      scrollTimeline_slogan
        .fromTo(slogan_1, { opacity: 0, duration: 0.03 }, { opacity: 1 })
        .fromTo(slogan_2, { opacity: 0, duration: 0.03 }, { opacity: 1 })
        // .to(slogan_container, {
        //   "--before-opacity": 1,
        //   duration: 0.5,
        // })
        .fromTo(slogan_3, { opacity: 0, duration: 0.03 }, { opacity: 1 })
        .fromTo(slogan_4, { opacity: 0, duration: 0.3 }, { opacity: 1 });
      // .to(slogan_container, {
      //   opacity: 0,
      //   duration: 1.5,
      // });
    },

    // For all screens
    all: function () {
      // Any global settings or cleanup can go here
    },
  });

  // ***************************laureate 1 - 패트릭 아우어***************************
  let sections1 = gsap.utils.toArray("main .laureate1-sect");
  let section1_1 = document.querySelector(".laureate1-sect-1");
  let section1_2 = document.querySelector(".laureate1-sect-2");
  let section1_3 = document.querySelector(".laureate1-sect-3");
  let section1_4 = document.querySelector(".laureate1-sect-4");
  // let section1_video = document.querySelector(".laureate1-sect-video");
  let section1_5 = document.querySelector(".laureate1-sect-5");
  let section1_text_box_1 = document.querySelector(
    ".laureate1-sect-2 .text-box"
  );
  let section1_text_box_2 = document.querySelector(
    ".laureate1-sect-3 .top-contents .text"
  );
  let section1_text_box_3 = document.querySelector(
    ".laureate1-sect-3 .bottom-contents .text"
  );
  let section1_text_box_4 = document.querySelector(
    ".laureate1-sect-4 .text-box"
  );
  let section1_text_box_5 = document.querySelector(
    ".laureate1-sect-5 .text-box"
  );
  let video01 = document.querySelector(".laureate1-sect-1 video");

  // // 미디어 쿼리 매칭
  ScrollTrigger.matchMedia({
    // For screens wider than 769px
    "(min-width: 769px)": function () {
      let scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate1-container",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=6000",
          onEnter: () => {
            video01.play();
          },
          onLeaveBack: () => {
            video01.currentTime = 0;
            video01.pause();
          },
          // markers: true,
        },
      });
      // 타임라인
      scrollTimeline
        .set(section1_1, {
          opacity: 0,
        })
        .to(section1_1, { opacity: 1, duration: 0.03 })
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
            start: "top bottom+=200", // 섹션이 뷰포트 중심에 도달할 때 시작
            end: "center center+=100", // 약간의 여유를 둔 후 종료
            scrub: true, // 스크롤에 따라 부드럽게 전환
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_3 opacity 전환 추가
      // gsap.fromTo(
      //   section1_3,
      //   { opacity: 0, scale: 0.8 }, // 초기 상태
      //   {
      //     opacity: 1, // 뷰포트 진입 시
      //     duration: 0.2,
      //     scale: 1,
      //     scrollTrigger: {
      //       trigger: section1_3, // section1_2를 트리거로 설정
      //       containerAnimation: scrollTimeline, // 수평 스크롤 타임라인과 동기화
      //       start: "start start-=200", // 섹션이 뷰포트 중심에 도달할 때 시작
      //       end: "start-=500 center+=200", // 약간의 여유를 둔 후 종료
      //       scrub: true, // 스크롤에 따라 부드럽게 전환
      //       // markers: true, // 디버깅용
      //     },
      //   }
      // );
      // section1_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_2,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.8, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top-=500 bottom-=200", // 시작 시점
            end: "center center+=1000", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_3,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.8, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top center+=1700", // 시작 시점
            end: "center center+=1000", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_4,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: -100,
          opacity: 1,
          duration: 0.2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=500", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section1_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section1_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
    // For screens between 481px and 768px
    "(max-width: 768px) and (min-width: 481px)": function () {
      let scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate1-container",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=6000",
          onEnter: () => {
            video01.play();
          },
          onLeaveBack: () => {
            video01.currentTime = 0;
            video01.pause();
          },
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
      // section1_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_1,
        { x: 300 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_3 opacity 전환 추가
      gsap.fromTo(
        section1_3,
        { opacity: 0, scale: 0.5 }, // 초기 상태
        {
          opacity: 1, // 뷰포트 진입 시
          duration: 2,
          scale: 1,
          scrollTrigger: {
            trigger: section1_3, // section1_2를 트리거로 설정
            containerAnimation: scrollTimeline, // 수평 스크롤 타임라인과 동기화
            start: "start-=800 center+=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
            end: "start-=500 center+=200", // 약간의 여유를 둔 후 종료
            scrub: true, // 스크롤에 따라 부드럽게 전환
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_2,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom+=2000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_3,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom+=2000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_4,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section1_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section1_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
    // For screens smaller than 480px
    "(max-width: 480px)": function () {
      let scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate1-container",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=2000",
          onEnter: () => {
            video01.play();
          },
          onLeaveBack: () => {
            video01.currentTime = 0;
            video01.pause();
          },
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
      // section1_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_1,
        { x: 300 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_3 opacity 전환 추가
      gsap.fromTo(
        section1_3,
        { opacity: 0, scale: 0.5 }, // 초기 상태
        {
          opacity: 1, // 뷰포트 진입 시
          duration: 2,
          scale: 1,
          scrollTrigger: {
            trigger: section1_3, // section1_2를 트리거로 설정
            containerAnimation: scrollTimeline, // 수평 스크롤 타임라인과 동기화
            start: "start-=800 center+=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
            end: "start-=500 center+=200", // 약간의 여유를 둔 후 종료
            scrub: true, // 스크롤에 따라 부드럽게 전환
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_3,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom+=800", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_2,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top center+=800", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section1_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section1_text_box_4,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: -30,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom+=800", // 시작 시점
            end: "center center-=10", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section1_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section1_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,

          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section1_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
  });

  // ***************************laureate 2 - 휴 에반스***************************
  let sections3 = gsap.utils.toArray("main .laureate2-sect");
  let section3_1 = document.querySelector(".laureate2-sect-1");
  let section3_2 = document.querySelector(".laureate2-sect-2");
  let section3_3 = document.querySelector(".laureate2-sect-3");
  let section3_4 = document.querySelector(".laureate2-sect-4");
  let section3_5 = document.querySelector(".laureate2-sect-5");
  let section3_text_box_1 = document.querySelector(
    ".laureate2-sect-2 .text-box"
  );
  let section3_text_box_2 = document.querySelector(
    ".laureate2-sect-3 .right-box .text-box"
  );
  let section3_text_box_3 = document.querySelector(
    ".laureate2-sect-3 .top-contents .text-box"
  );
  let section3_text_box_4 = document.querySelector(
    ".laureate2-sect-4 .text-box"
  );
  let section3_text_box_5 = document.querySelector(
    ".laureate2-sect-5 .text-box"
  );
  let video03 = document.querySelector(".laureate2-sect-1 video");

  // 미디어 쿼리 매칭
  ScrollTrigger.matchMedia({
    // For screens wider than 769px
    "(min-width: 769px)": function () {
      let scrollTimeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate2-container",
          pin: true,
          scrub: 1,
          //   start: "top top",
          end: "+=6000",
          onEnter: () => {
            video03.play();
          },
          onLeaveBack: () => {
            video03.currentTime = 0;
            video03.pause();
          },
          // markers: true,
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
      // gsap.fromTo(
      //   ".laureate2-sect-2 .img-box, .laureate2-sect-2 .bg",
      //   // section3_2,
      //   { opacity: 0 }, // 초기 상태
      //   {
      //     opacity: 1, // 뷰포트 진입 시
      //     duration: 2,
      //     scrollTrigger: {
      //       trigger: section3_2, // section3_2를 트리거로 설정
      //       containerAnimation: scrollTimeline3, // 수평 스크롤 타임라인과 동기화
      //       start: "top center", // 섹션이 뷰포트 중심에 도달할 때 시작
      //       end: "center center+=100", // 약간의 여유를 둔 후 종료
      //       scrub: true, // 스크롤에 따라 부드럽게 전환
      //       // markers: true, // 디버깅용
      //     },
      //   }
      // );
      // section3_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=500", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
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
            end: "center center+=500", // 약간의 여유를 둔 후 종료
            scrub: true, // 스크롤에 따라 부드럽게 전환
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_2,
        { x: 300, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom+=200", // 시작 시점
            end: "center center+=1000", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_3,
        { x: 300, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top center+=2000", // 시작 시점
            end: "center center+=1000", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_4,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=500", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_5 opacity 전환 추가
      gsap.fromTo(
        ".laureate2-sect-5 .img-box",
        { opacity: 0 }, // 초기 상태
        {
          opacity: 1, // 뷰포트 진입 시
          duration: 2,
          scrollTrigger: {
            trigger: section3_5, // section3_5를 트리거로 설정
            containerAnimation: scrollTimeline3, // 수평 스크롤 타임라인과 동기화
            start: "start center+=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
            end: "center center+=200", // 약간의 여유를 둔 후 종료
            scrub: true, // 스크롤에 따라 부드럽게 전환
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section3_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
    // For screens between 481px and 768px
    "(max-width: 768px) and (min-width: 481px)": function () {
      let scrollTimeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate2-container",
          pin: true,
          scrub: 1,
          //   start: "top top",
          end: "+=4500",
          onEnter: () => {
            video03.play();
          },
          onLeaveBack: () => {
            video03.currentTime = 0;
            video03.pause();
          },
          // markers: true,
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
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
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
      // section3_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_2,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom+=200", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_3,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom+=200", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_4,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section3_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section3_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
    // For screens smaller than 480px
    "(max-width: 480px)": function () {
      let scrollTimeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate2-container",
          pin: true,
          scrub: 1,
          //   start: "top top",
          end: "+=2000",
          onEnter: () => {
            video03.play();
          },
          onLeaveBack: () => {
            video03.currentTime = 0;
            video03.pause();
          },
          // markers: true,
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
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
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
      // section3_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_2,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom+=200", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_3,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom+=200", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section3_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section3_text_box_4,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section3_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section3_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section3_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline3, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
  });

  // ***************************laureate 3 - 완지라 마타이***************************
  let sections2 = gsap.utils.toArray("main .laureate3-sect");
  let section2_1 = document.querySelector(".laureate3-sect-1");
  let section2_2 = document.querySelector(".laureate3-sect-2");
  let section2_3 = document.querySelector(".laureate3-sect-3");
  let section2_4 = document.querySelector(".laureate3-sect-4");
  let section2_5 = document.querySelector(".laureate3-sect-5");
  let section2_text_box_1 = document.querySelector(
    ".laureate3-sect-2 .text-box"
  );
  let section2_text_box_2 = document.querySelector(
    ".laureate3-sect-3 .bottom-contents"
  );
  let section2_text_box_3 = document.querySelector(
    ".laureate3-sect-3 .top-contents"
  );
  let section2_text_box_4 = document.querySelector(
    ".laureate3-sect-4 .contents-box"
  );
  let section2_text_box_5 = document.querySelector(
    ".laureate3-sect-5 .text-box"
  );
  let video02 = document.querySelector(".laureate3-sect-1 video");

  // 미디어 쿼리 매칭
  ScrollTrigger.matchMedia({
    // For screens wider than 769px
    "(min-width: 769px)": function () {
      let scrollTimeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate3-container",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=6000",
          onEnter: () => {
            video02.play();
          },
          onLeaveBack: () => {
            video02.currentTime = 0;
            video02.pause();
          },
          // markers: true,
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
      // gsap.fromTo(
      //   section2_2,
      //   { opacity: 0 }, // 초기 상태
      //   {
      //     opacity: 1, // 뷰포트 진입 시
      //     duration: 2,
      //     scrollTrigger: {
      //       trigger: section2_2, // section2_2를 트리거로 설정
      //       containerAnimation: scrollTimeline2, // 수평 스크롤 타임라인과 동기화
      //       start: "top center", // 섹션이 뷰포트 중심에 도달할 때 시작
      //       end: "center center+=100", // 약간의 여유를 둔 후 종료
      //       scrub: true, // 스크롤에 따라 부드럽게 전환
      //       // markers: true, // 디버깅용
      //     },
      //   }
      // );
      // section2_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=500", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_3 opacity 전환 추가
      gsap.fromTo(
        section2_3,
        { opacity: 0 }, // 초기 상태
        {
          opacity: 1, // 뷰포트 진입 시
          duration: 0.2,
          scrollTrigger: {
            trigger: section2_3, // section2_3를 트리거로 설정
            containerAnimation: scrollTimeline2, // 수평 스크롤 타임라인과 동기화
            start: "start-=1000 center+=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
            end: "center center+=1800", // 약간의 여유를 둔 후 종료
            scrub: true, // 스크롤에 따라 부드럽게 전환
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_2,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top bottom-=200", // 시작 시점
            end: "center center+=1000", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_3,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top center+=1700", // 시작 시점
            end: "center center+=1200", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_4,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=1000", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section2_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section2_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,

          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
    // For screens between 481px and 768px
    "(max-width: 768px) and (min-width: 481px)": function () {
      let scrollTimeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate3-container",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=4500",
          onEnter: () => {
            video02.play();
          },
          onLeaveBack: () => {
            video02.currentTime = 0;
            video02.pause();
          },
          // markers: true,
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
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
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
      // section2_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_2,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top center+=1000", // 시작 시점
            end: "center center+=400", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_3,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top center+=1000", // 시작 시점
            end: "center center", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_4,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top bottom+=500", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section2_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section2_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,

          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
    // For screens smaller than 480px
    "(max-width: 480px)": function () {
      let scrollTimeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate3-container",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=2000",
          onEnter: () => {
            video02.play();
          },
          onLeaveBack: () => {
            video02.currentTime = 0;
            video02.pause();
          },
          // markers: true,
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
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
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
      // section2_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_2,
        { x: 50, opacity: 0 }, // 시작 상태
        {
          x: 50,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top center+=1000", // 시작 시점
            end: "center center+=400", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_3,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top center+=1000", // 시작 시점
            end: "center center", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section2_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section2_text_box_4,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top bottom+=500", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section2_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section2_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,

          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section2_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline2, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
  });

  // ***************************laureate 4 - 구스마오***************************
  let sections4 = gsap.utils.toArray("main .laureate4-sect");
  let section4_1 = document.querySelector(".laureate4-sect-1");
  let section4_2 = document.querySelector(".laureate4-sect-2");
  let section4_3 = document.querySelector(".laureate4-sect-3");
  let section4_4 = document.querySelector(".laureate4-sect-4");
  let section4_5 = document.querySelector(".laureate4-sect-5");
  let section4_text_box_1 = document.querySelector(
    ".laureate4-sect-2 .text-box"
  );
  let section4_text_box_2 = document.querySelector(
    ".laureate4-sect-3 .right-box"
  );
  let section4_text_box_3 = document.querySelector(
    ".laureate4-sect-3 .left-box"
  );
  let section4_text_box_4 = document.querySelector(
    ".laureate4-sect-4 .contents-box"
  );
  let section4_text_box_5 = document.querySelector(
    ".laureate4-sect-5 .text-box"
  );
  let video04 = document.querySelector(".laureate4-sect-1 video");

  // 미디어 쿼리 매칭
  ScrollTrigger.matchMedia({
    // For screens wider than 769px
    "(min-width: 769px)": function () {
      let scrollTimeline4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate4-container",
          pin: true,
          scrub: 1,
          //   start: "top top",
          end: "+=6000",
          onEnter: () => {
            video04.play();
          },
          onLeaveBack: () => {
            video04.currentTime = 0;
            video04.pause();
          },
          // markers: true,
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
      // gsap.fromTo(
      //   section4_2,
      //   { opacity: 0 }, // 초기 상태
      //   {
      //     opacity: 1, // 뷰포트 진입 시
      //     duration: 2,
      //     scrollTrigger: {
      //       trigger: section4_2, // section4_2를 트리거로 설정
      //       containerAnimation: scrollTimeline4, // 수평 스크롤 타임라인과 동기화
      //       start: "top center", // 섹션이 뷰포트 중심에 도달할 때 시작
      //       end: "center center+=100", // 약간의 여유를 둔 후 종료
      //       scrub: true, // 스크롤에 따라 부드럽게 전환
      //       // markers: true, // 디버깅용
      //     },
      //   }
      // );
      gsap.fromTo(
        ".laureate4-sect-2 .img-box, .laureate4-sect-2 .bg",
        { opacity: 0 },
        {
          opacity: 1, // 뷰포트 진입 시
          duration: 2,
          scrollTrigger: {
            trigger: section4_2, // section4_2를 트리거로 설정
            containerAnimation: scrollTimeline4, // 수평 스크롤 타임라인과 동기화
            start: "top bottom-=1000", // 섹션이 뷰포트 중심에 도달할 때 시작
            end: "center center+=100", // 약간의 여유를 둔 후 종료
            scrub: true, // 스크롤에 따라 부드럽게 전환
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
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
      // section4_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_2,
        { x: 120, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom+=200", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_3,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top center+=2000", // 시작 시점
            end: "center center+=500", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_4,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=1000", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_5 opacity 전환 추가
      gsap.fromTo(
        ".laureate4-sect-5 .img-box",
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
      // section4_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section4_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
    // For screens between 481px and 768px
    "(max-width: 768px) and (min-width: 481px)": function () {
      let scrollTimeline4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate4-container",
          pin: true,
          scrub: 1,
          //   start: "top top",
          end: "+=4500",
          onEnter: () => {
            video04.play();
          },
          onLeaveBack: () => {
            video04.currentTime = 0;
            video04.pause();
          },
          // markers: true,
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
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
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
      // section4_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_2,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top center+=1000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_3,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top center+=1000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_4,
        { x: 300, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section4_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section4_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
    // For screens smaller than 480px
    "(max-width: 480px)": function () {
      let scrollTimeline4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".laureate4-container",
          pin: true,
          scrub: 1,
          //   start: "top top",
          end: "+=2000",
          onEnter: () => {
            video04.play();
          },
          onLeaveBack: () => {
            video04.currentTime = 0;
            video04.pause();
          },
          // markers: true,
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
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_2 text_box_1 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_1,
        { x: 200 }, // 시작 상태
        {
          x: 0, // 끝 상태
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_2, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top center", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
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
      // section4_3 text_box_2 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_2,
        { x: 200, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom+=200", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_3 text_box_3 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_3,
        { x: 100, opacity: 0 }, // 시작 상태
        {
          x: 10,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_3, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom+=200", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
      // section4_4 text_box_4 x좌표 이동 추가
      gsap.fromTo(
        section4_text_box_4,
        { x: 300, opacity: 0 }, // 시작 상태
        {
          x: 0,
          opacity: 1,
          duration: 1, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_4, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom+=1000", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
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
      // section4_5 text_box_5 y좌표 이동 추가
      gsap.fromTo(
        section4_text_box_5,
        { y: 100, x: 0, opacity: 0 }, // 시작 상태
        {
          y: 0,
          opacity: 1,
          duration: 2, // 애니메이션 지속 시간
          scrollTrigger: {
            trigger: section4_5, // 섹션 1-2가 트리거
            containerAnimation: scrollTimeline4, // 기존 타임라인과 동기화
            start: "top bottom", // 시작 시점
            end: "center center+=100", // 종료 시점
            scrub: true, // 스크롤에 따라 애니메이션
            // markers: true, // 디버깅용
          },
        }
      );
    },
  });

  // ***************************배너***************************
  let banner1 = document.querySelector(".banner1-sect");
  let banner2 = document.querySelector(".banner2-sect");
  // 배너1
  let scrollTimeline_banner1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner1-sect",
      // pin: true,
      scrub: 1,
      start: "top bottom-=300",
      end: "+=200",
      // markers: true,
    },
  });
  // 타임라인
  scrollTimeline_banner1.fromTo(
    banner1,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 }
  );
  // 배너2
  let scrollTimeline_banner2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner2-sect",
      // pin: true,
      scrub: 1,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
    },
  });
  // 타임라인
  scrollTimeline_banner2.fromTo(
    banner2,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1 }
  );

  // ***************************안내***************************
  let announcement = document.querySelector(".ant-sect .wrap");
  let scrollTimeline_announcment = gsap.timeline({
    scrollTrigger: {
      trigger: ".ant-sect",
      // pin: true,
      scrub: 1,
      start: "top bottom-=100",
      end: "+=1000",
      // markers: true,
    },
  });
  // 타임라인
  scrollTimeline_announcment.fromTo(
    announcement,
    { y: 200, opacity: 0 },
    { y: 0, opacity: 1 }
  );
  // ***************************갤러리***************************
  let gallery = document.querySelector(".gallery .wrap");
  let scrollTimeline_gallery = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery",
      // pin: true,
      scrub: 1,
      start: "top bottom-=100",
      end: "+=1000",
      // markers: true,
    },
  });
  // 타임라인
  scrollTimeline_gallery.fromTo(
    gallery,
    { y: 200, opacity: 0 },
    { y: 0, opacity: 1 }
  );

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

  // // ***************************팝업 창***************************
  // // Function to check if today is the target date
  // function isTargetDate() {
  //   const targetDate = new Date(2025, 0, 10); // 2025년 1월 15일 (월은 0부터 시작)
  //   const today = new Date();
  //   return (
  //     today.getFullYear() === targetDate.getFullYear() &&
  //     today.getMonth() === targetDate.getMonth() &&
  //     today.getDate() === targetDate.getDate()
  //   );
  // }

  // // Function to show the popup
  // function showPopup() {
  //   const popup = document.getElementById("popup");
  //   const overlay = document.getElementById("popup-overlay");
  //   popup.style.display = "block";
  //   overlay.style.display = "block";
  // }
  // // Function to close the popup
  // function closePopup() {
  //   const popup = document.getElementById("popup");
  //   const overlay = document.getElementById("popup-overlay");
  //   popup.classList.remove("show");
  //   overlay.classList.remove("show");
  // }
  // // Display the popup if today is the target date
  // if (isTargetDate()) {
  //   showPopup();
  // }
});
