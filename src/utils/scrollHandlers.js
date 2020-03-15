import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import anime from "animejs/lib/anime.es.js";
import { setupLineDrawHandler } from "./lineDrawHanlder";
import { morphCirclePath, morphBrainPath, intro, dir } from "./consts";
import { returnElements } from "./DOMelements";
import { setupHeadAnimation } from "./headAnimation";
import { viewedFlag } from "../store/store";

export default function initScroll() {
  const { setSprite } = setupHeadAnimation();

  const {
    pageHeader,
    intro1,
    faceImageContainer,
    timelineLines
  } = returnElements();

  const timelineViewedHandler = () => {
    viewedFlag.set(true);

    if (typeof Storage !== "undefined") {
      localStorage.setItem("wasViewed", true);
    }
  };

  const {
    lines,
    animateLines,
    setLinesProgress,
    restartLinesProgress
  } = setupLineDrawHandler();

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

  let isBrain = false;

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
            value: isBrain ? morphCirclePath : morphBrainPath,
            duration: 1000
          }
        ]
      });
  };

  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.25,
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
      faceImageContainer.classList.add("scaled");
      pulseCircle.pause();
      pulseCircle.seek(0);
      restartLinesProgress(lines.phase1);
    })
    .on("leave", function(event) {
      intro1.classList.add("hidden");
      faceImageContainer.classList.remove("scaled");
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
        setSprite(1);
        handleMorph();
        animateLines(lines.phase1);
        isBrain = true;
      }
    })
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
      } else {
        setSprite(0);
        animateLines(lines.phase1);

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
      setLinesProgress(lines.phase2, progress);
    })
    .on("enter", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        setSprite(0);
      } else {
        setLinesProgress(lines.phase2, 1);
      }
    })
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
      } else {
        setSprite(1);
      }
    });

  const stage5 = new ScrollMagic.Scene({
    triggerElement: intro.id5
  })
    .setPin(intro.id5)
    .setClassToggle(intro.id5, "visible")
    .on("enter", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        setSprite(2);
        timelineLines.classList.remove("unrevealed");
        pageHeader.classList.add("navbar");
      } else {
        faceImageContainer.classList.remove("down");
        animateLines([...lines.phase1, ...lines.phase2]);
      }
    })
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === dir.forward) {
        faceImageContainer.classList.add("down");
        animateLines([...lines.phase1, ...lines.phase2], true);
        timelineViewedHandler();
      } else {
        setSprite(0);
        timelineLines.classList.add("unrevealed");
        pageHeader.classList.remove("navbar");
      }
    });

  controller.addScene([stage1, stage2, stage2b, stage3, stage4, stage5]);

  stage3.duration(900);
  stage4.duration(2100);
  stage5.duration(400);
}
