import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import anime from "animejs/lib/anime.es.js";
import { animateParticles } from "./particlesAnimation";
import { circleMorhp1, circleMorhp2, intro, dir } from "./consts";
import { reutrnElements } from "./DOMelements";

export default function initScroll() {

  const {
    intro1,
    headContainer,
    shapeContainer,
    headSprite1,
    headSprite2,
    headSprite3,
  } = reutrnElements();


  const { startParticlesAnimation, stopParticlesAnimation } = animateParticles();

  const spinCircle = anime({
    targets: "#shape-wrapper",
    rotate: "1turn",
    duration: 20000,
    delay: 0,
    loop: true,
    autoplay: false,
    easing: "linear"
  });

  const pulseCircle = anime({
    targets: "#base-circle",
    scale: 1.1,
    fill: ["#d6e6ff"],
    duration: 800,
    delay: 0,
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "linear"
  });

  const morphCircle = anime.timeline({
    loop: true,
    easing: "easeOutQuad",
    autoplay: false,
    direction: "alternate"
  });

  // const moveOut = anime({
  //   targets: [headContainer, shapeContainer],
  //   translateY: [0, "100%"],
  //   translateX: ["-50%", "-50%"],
  //   autoplay: false,
  //   duration: 10000,
  // });

  // moveOut.play();

  morphCircle.add({
    targets: "#base-circle",
    d: [
      {
        value: circleMorhp1,
        duration: 1000
      },
      {
        value: circleMorhp2,
        duration: 1000
      },
      {
        value: circleMorhp1,
        duration: 1000
      }
    ]
  });

  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.3,
      duration: 500,
      offset: 0.3
    }
  });

  const stage1 = new ScrollMagic.Scene({
    triggerElement: intro.id1
  })
    .setPin(intro.id1)
    .on("enter", function (event) {
      intro1.classList.remove("hidden");
      headContainer.classList.add("scaled");
      shapeContainer.classList.add("scaled");
      pulseCircle.pause();
      pulseCircle.seek(0);
    })
    .on("leave", function (event) {
      intro1.classList.add("hidden");
      headContainer.classList.remove("scaled");
      shapeContainer.classList.remove("scaled");
      pulseCircle.play();
    });


  const stage2 = new ScrollMagic.Scene({
    triggerElement: intro.id2
  })
    .setPin(intro.id2)
    .setClassToggle(intro.id2, "visible")

  const stage3 = new ScrollMagic.Scene({
    triggerElement: intro.id3
  })
    .setPin(intro.id3)
    .setClassToggle(intro.id3, "visible")

    .on("enter", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        headSprite1.classList.remove("visible");
      }
    })
    .on("leave", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        morphCircle.play();
        spinCircle.play();
      }
      else {
        headSprite1.classList.add("visible");
      }
    });

  const stage4 = new ScrollMagic.Scene({
    triggerElement: intro.id4
  })
    .setPin(intro.id4)
    .setClassToggle(intro.id4, "visible")
    .on("leave", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {

        startParticlesAnimation("fast");

      }
      if (scrollDirection === "REVERSE") {
        morphCircle.pause();
        morphCircle.seek(0);
        spinCircle.pause();
        spinCircle.seek(0);
        stopParticlesAnimation();
      }
    })
    .on("enter", function ({ scrollDirection }) {
      startParticlesAnimation();
    });

  const stage5 = new ScrollMagic.Scene({
    triggerElement: intro.id5
  })
    .setPin(intro.id5)
    .setClassToggle(intro.id5, "visible")
    .on("enter", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        headSprite2.classList.remove("visible");
        headSprite3.classList.add("visible");
      }
      else {
        startParticlesAnimation('fast');
        headContainer.classList.remove("down");
        shapeContainer.classList.remove("down");
      }
    })
    .on("leave", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        headContainer.classList.add("down");
        shapeContainer.classList.add("down");
        startParticlesAnimation('turbo');
      }
      else {
        headSprite2.classList.add("visible");
        headSprite3.classList.remove("visible");
      }
    });

  controller.addScene([stage1, stage2, stage3, stage4, stage5]);

  stage1.triggerHook(0.25).addIndicators();
  stage2.addIndicators();
  stage3.addIndicators();
  stage4.duration(1800).addIndicators();
  stage5.addIndicators();
}
