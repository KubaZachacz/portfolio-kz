import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import anime from "animejs/lib/anime.es.js";
import { animateParticles } from "./particlesAnimation";
import { morphCriclePath, morphBrainPath, intro, dir } from "./consts";
import { reutrnElements } from "./DOMelements";

export default function initScroll() {
  const {
    pageHeader,
    intro1,
    headContainer,
    shapeContainer,
    headSprite1,
    headSprite2,
    headSprite3,
    timelineLines
  } = reutrnElements();

  const {
    startParticlesAnimation,
    stopParticlesAnimation,
    singleParticlesAnimation
  } = animateParticles();

  let isBrain = false;

  const animeRight = anime({
    targets: "#lines-right path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2000,
    delay: function(el, i) {
      return i * 250;
    },
    autoplay: false
  });

  const animeLeft = anime({
    targets: "#lines-left path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2000,
    delay: function(el, i) {
      return i * 200;
    },
    autoplay: false
  });

  const animeRight2 = anime({
    targets: "#lines-2-right path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 8000,
    delay: function(el, i) {
      return i * 400;
    },
    autoplay: false
  });

  const animeLeft2 = anime({
    targets: "#lines-2-left path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    delay: function(el, i) {
      return i * 400;
    },
    autoplay: false
  });

  const handlePreLines = () => {
    animeLeft.play();
    animeRight.play();
  };

  const handleLines = () => {
    animeLeft2.play();
    animeRight2.play();
  };

  const pulseCircle = anime({
    targets: "#base-circle",
    scale: 1.1,
    fill: ["#b7d0f7"],
    duration: 1200,
    delay: 0,
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "linear"
  });

  const handleMorph = () => {
    anime
      .timeline({
        targets: "#base-circle",
        easing: "easeOutQuad",
        autoplay: true
      })
      .add({
        targets: "#base-circle",
        d: [
          {
            value: isBrain ? morphCriclePath : morphBrainPath,
            duration: 1000
          }
        ]
      });
  };

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
    .on("enter", function(event) {
      intro1.classList.remove("hidden");
      headContainer.classList.add("scaled");
      shapeContainer.classList.add("scaled");
      pulseCircle.pause();
      pulseCircle.seek(0);
    })
    .on("leave", function(event) {
      intro1.classList.add("hidden");
      headContainer.classList.remove("scaled");
      shapeContainer.classList.remove("scaled");
      pulseCircle.play();
    });

  const stage2 = new ScrollMagic.Scene({
    triggerElement: intro.id2
  })
    .setPin(intro.id2)
    .setClassToggle(intro.id2, "visible");

  const stage2b = new ScrollMagic.Scene({
    triggerElement: intro.id2b
  })
    .setPin(intro.id2b)
    .setClassToggle(intro.id2b, "visible");

  const stage3 = new ScrollMagic.Scene({
    triggerElement: intro.id3
  })
    .setPin(intro.id3)
    .setClassToggle(intro.id3, "visible")

    .on("enter", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        headSprite1.classList.remove("visible");
        // if (isBrain) morphBrain.reverse();
        // morphBrain.play();
        handleMorph();
        handlePreLines();

        isBrain = true;
      }
    })
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
      } else {
        headSprite1.classList.add("visible");
        // morphBrain.reverse();
        // morphBrain.play();
        handleMorph();
        isBrain = false;
      }
    });

  let prevProgress = 0;

  const stage4 = new ScrollMagic.Scene({
    triggerElement: intro.id4
  })
    .setPin(intro.id4)
    .setClassToggle(intro.id4, "visible")
    .on("progress", ({ progress }) => {
      if (Math.abs(progress - prevProgress) > 0.2) {
        prevProgress = progress;
        // singleParticlesAnimation();
      } else {
        // stopParticlesAnimation();
      }
    })
    .on("enter", function({ scrollDirection }) {
      // singleParticlesAnimation();
      handleLines();
    })
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        // startParticlesAnimation("fast");
      }
    });
  let endParticlesTimeout = null;

  const stage5 = new ScrollMagic.Scene({
    triggerElement: intro.id5
  })
    .setPin(intro.id5)
    .setClassToggle(intro.id5, "visible")
    .on("enter", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        headSprite2.classList.remove("visible");
        headSprite3.classList.add("visible");
      } else {
        // startParticlesAnimation("fast");
        headContainer.classList.remove("down");
        shapeContainer.classList.remove("down");
        pageHeader.classList.remove("navbar");
        timelineLines.classList.add("unrevealed");

        // clearTimeout(endParticlesTimeout);
      }
    })
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        headContainer.classList.add("down");
        shapeContainer.classList.add("down");
        pageHeader.classList.add("navbar");
        timelineLines.classList.remove("unrevealed");
        // startParticlesAnimation("turbo");

        // endParticlesTimeout = setTimeout(() => {
        //   stopParticlesAnimation();
        // }, 1400);
      } else {
        headSprite2.classList.add("visible");
        headSprite3.classList.remove("visible");
      }
    });

  controller.addScene([stage1, stage2, stage2b, stage3, stage4, stage5]);

  stage1.triggerHook(0.25)
  // .addIndicators();
  // stage2.addIndicators();
  // stage2b.addIndicators();
  // stage3.addIndicators();
  stage4.duration(1800)
  // .addIndicators();
  stage5.duration(300)
  // .addIndicators();
}
