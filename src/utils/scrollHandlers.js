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


  const linesTargets = {
    lvl1: [{ id: "lines-right", duration: 5400 }, { id: "lines-left", duration: 5400 }],
    lvl2: [{ id: "lines-2-right", duration: 5400 }, { id: "lines-2-left", duration: 5400 }],
  }

  const drawBasicConfig = {
    easing: "easeInOutSine",
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: function (el, i) {
      return i * 200;
    },
    autoplay: false
  }

  const lvl1left = anime({
    targets: `#lines-left path`,
    duration: 1200,
    ...drawBasicConfig
  })

  const lvl1right = anime({
    targets: `#lines-right path`,
    duration: 2200,
    ...drawBasicConfig
  })

  const lvl2left = anime({
    targets: `#lines-2-left path`,
    duration: 1000,
    ...drawBasicConfig
  })

  const lvl2right = anime({
    targets: `#lines-2-right path`,
    duration: 1000,
    ...drawBasicConfig
  })

  const drawLines = () => {
    if (lvl1left.began || lvl1left.completed) {
      lvl1left.reverse();
      lvl1right.reverse();
    }
    lvl1left.play();
    lvl1right.play();
  }

  const drawAll = () => {
    if (lvl2left.began || lvl1left.completed) {
      lvl1left.reverse();
      lvl1right.reverse();
      lvl2left.reverse();
      lvl2right.reverse();
    }
    lvl1left.play();
    lvl1right.play();
    lvl2left.play();
    lvl2right.play();
  }

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

    .on("enter", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        headSprite1.classList.remove("visible");
        handleMorph();
        drawLines();

        isBrain = true;
      }
    })
    .on("leave", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
      } else {
        headSprite1.classList.add("visible");

        drawLines();

        handleMorph();
        isBrain = false;
      }
    });

  const stage4 = new ScrollMagic.Scene({
    triggerElement: intro.id4
  })
    .setPin(intro.id4)
    .setClassToggle(intro.id4, "visible")
    .on("progress", ({ progress }) => {
      lvl2left.seek(lvl2left.duration * progress);
      lvl2right.seek(lvl2right.duration * progress);
    })
    .on("enter", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {

      } else {
        lvl2left.seek(lvl2left.duration);
        lvl2right.seek(lvl2right.duration);
      }

    })
    .on("leave", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
      }
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
        timelineLines.classList.remove("unrevealed");
        pageHeader.classList.add("navbar");
      }
      else {
        headContainer.classList.remove("down");
        shapeContainer.classList.remove("down");
        drawAll();
      }
    })
    .on("leave", function ({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        headContainer.classList.add("down");
        shapeContainer.classList.add("down");
        drawAll();
      }
      else {
        headSprite2.classList.add("visible");
        headSprite3.classList.remove("visible");
        timelineLines.classList.add("unrevealed");
        pageHeader.classList.remove("navbar");

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
