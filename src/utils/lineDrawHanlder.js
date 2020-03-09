import anime from "animejs/lib/anime.es.js";

const BASIC_CONFIG = {
  easing: "easeInOutSine",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 800,
  delay: function (el, i) {
    return i * 200;
  },
  autoplay: false
}

export const setupLineDrawHanlder = () => {

  const lines = {
    pahse1: [anime({
      ...BASIC_CONFIG,
      targets: `#lines-left path`,
      duration: 1200,
    }),
    anime({
      ...BASIC_CONFIG,
      targets: `#lines-right path`,
      duration: 2200,
    }),
    ],
    pahse2: [anime({
      ...BASIC_CONFIG,
      targets: `#lines-2-left path`,
    }),
    anime({
      ...BASIC_CONFIG,
      targets: `#lines-2-right path`,
      duration: 1000,
    }),
    ]
  }

  const animateLines = (animations = [], isReversed = false) => {
    for (let anim of animations) {
      if (isReversed || anim.began || anim.completed) {
        anim.reverse();
      }
      anim.play();
    }
  }

  const setLinesProgress = (animations = [], progress) => {
    for (let anim of animations) {
      anim.seek(anim.duration * progress);
    }
  }

  const restartLinesProgress = (animations = []) => {
    for (let anim of animations) {
      anim.direction = "normal";
      anim.reset();
    }
  }

  return ({ ...{ lines, animateLines, setLinesProgress, restartLinesProgress } })
}