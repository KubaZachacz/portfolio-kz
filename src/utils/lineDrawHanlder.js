import anime from "animejs/lib/anime.es.js";

const BASIC_CONFIG = {
  easing: "easeInOutSine",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 800,
  delay: function(el, i) {
    return i * 200;
  },
  autoplay: false,
  begin: function({ animatables }) {
    for (let { target } of animatables) {
      target.style.opacity = 1;
    }
  },
  complete: function({ animatables, progress }) {
    if (progress === 0) {
      for (let { target } of animatables) {
        target.style.opacity = 0;
      }
    }
  }
};

export const setupLineDrawHandler = () => {
  const lines = {
    phase1: [
      anime({
        ...BASIC_CONFIG,
        targets: "#lines-left path",
        duration: 1200
      }),
      anime({
        ...BASIC_CONFIG,
        targets: "#lines-right path",
        duration: 2200
      })
    ],
    phase2: [
      anime({
        ...BASIC_CONFIG,
        targets: "#lines-2-left path",
        duration: 500,
        update: function({ progress }) {
          console.log("progress", progress);
          if (progress === 0) {
            const targets = document.querySelectorAll("#lines-2-left path");
            for (let target of targets) {
              target.style.opacity = 0;
            }
          }
        }
      }),
      anime({
        ...BASIC_CONFIG,
        targets: "#lines-2-right path"
      })
    ]
  };

  const animateLines = (animations = [], isReversed = false) => {
    for (let anim of animations) {
      if (isReversed || anim.began || anim.completed) {
        anim.reverse();
      }
      anim.play();
    }
  };

  const setLinesProgress = (animations = [], progress) => {
    for (let anim of animations) {
      anim.seek(anim.duration * progress);
    }
  };

  const restartLinesProgress = (animations = []) => {
    for (let anim of animations) {
      anim.direction = "normal";
      anim.reset();
    }
  };

  return { ...{ lines, animateLines, setLinesProgress, restartLinesProgress } };
};
