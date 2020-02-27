import anime from "animejs/lib/anime.es.js";
import Color from 'color';

const SHAPES = {
  circle: "circle",
  squre: "square"
};

const CIRCLE_BASE = {
  shape: SHAPES.circle,
  colors: ["#FF1461", "#18FF92", "#25A9CC", "#FBF38C", "#FF4D22"],
}

const SQUARE_BASE = {
  shape: SHAPES.squre,
  colors: ["#2D4380", "#A6BEFF", "#5985FF", "#535F80", "#476BCC"],
}

export function animateParticles() {
  const canvasEl = document.querySelector("canvas");
  const { width: cWidth, height: cHeight } = canvasEl.getBoundingClientRect();

  const ctx = canvasEl.getContext("2d");

  let mode = "slow"

  const config = {
    slow: {
      numberOfSideParticles: 3,
      particles: [
        {
          ...CIRCLE_BASE,
          range: {
            x: [(3 * cWidth) / 4, cWidth],
            y: [0, cHeight]
          }
        },
        {
          ...SQUARE_BASE,
          range: {
            x: [0, cWidth / 4],
            y: [0, cHeight]
          }
        }
      ],
      startPos: {
        x: cWidth / 2,
        y: cHeight / 2
      },
      animationDuration: 2500,
      loopDuration: 1500,
      fade: 0.005,
    },
    fast: {
      numberOfSideParticles: 10,
      particles: [
        {
          ...CIRCLE_BASE,
          range: {
            x: [cWidth / 2, 7 * cWidth / 8],
            y: [0, cHeight / 3]
          }
        },
        {
          ...SQUARE_BASE,
          range: {
            x: [cWidth / 8, cWidth / 2],
            y: [0, cHeight / 3]
          }
        }
      ],
      startPos: {
        x: cWidth / 2,
        y: cHeight / 2
      },
      animationDuration: 1500,
      loopDuration: 200,
      fade: 0.01,
    },
    turbo: {
      numberOfSideParticles: 15,
      particles: [
        {
          ...CIRCLE_BASE,
          range: {
            x: [cWidth / 2, 5 * cWidth / 6],
            y: [0, cHeight / 3]
          }
        },
        {
          ...SQUARE_BASE,
          range: {
            x: [cWidth / 6, cWidth / 2],
            y: [0, cHeight / 3]
          }
        }
      ],
      startPos: {
        x: cWidth / 2,
        y: cHeight
      },
      animationDuration: 1500,
      loopDuration: 200,
      fade: 0.025,
    }
  };

  function setCanvasSize() {
    canvasEl.width = cWidth;
    canvasEl.height = cHeight;
  }

  function setParticuleDirection({ x, y }) {
    return {
      x: anime.random(...x),
      y: anime.random(...y)
    };
  }

  function createParticule({ startPos, particle }) {
    const p = { ...startPos };
    const { shape, colors, range } = particle;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(100, 150);
    p.endPos = setParticuleDirection(range);
    p.draw = function () {
      ctx.beginPath();
      if (shape === SHAPES.circle)
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      else if (shape === SHAPES.squre) {
        const a = 1.4 * p.radius;
        ctx.rect(p.x - a / 2, p.y - a / 2, a, a)
      };
      ctx.fillStyle = p.color;
      ctx.fill();
    };
    return p;
  }

  function renderParticule(anim) {
    const { fade } = config[mode];
    for (let i = 0; i < anim.animatables.length; i++) {
      const { color, draw } = anim.animatables[i].target;

      anim.animatables[i].target.color = Color(color).fade(fade)
      draw();
    }
  }

  function animateParticles(startPos) {
    const { numberOfSideParticles, animationDuration } = config[mode]

    const outputParticles = [];
    for (let i = 0; i < numberOfSideParticles; i++) {
      for (let particle of Object.values(config[mode].particles)) {
        outputParticles.push(createParticule({ ...{ particle, startPos } }));
      }
    }
    anime.timeline().add({
      targets: outputParticles,
      x: function (p) {
        return p.endPos.x;
      },
      y: function (p) {
        return p.endPos.y;
      },
      radius: 0.1,
      duration: anime.random(animationDuration, 2 * animationDuration),
      easing: "easeOutExpo",
      update: renderParticule
    });
  }

  const render = anime({
    duration: Infinity,
    update: function () {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  });

  let animationInterval = null;

  function startAnimation() {
    const { startPos } = config[mode];
    clearInterval(animationInterval);
    animateParticles(startPos);
    animationInterval = setInterval(() => {
      animateParticles(startPos);
    }, config[mode].loopDuration)
  }


  setCanvasSize();
  window.addEventListener("resize", setCanvasSize, false);

  return {
    stopParticlesAnimation: () => clearInterval(animationInterval),
    startParticlesAnimation: (newMode = "slow") => {
      mode = newMode;
      setCanvasSize();
      startAnimation()
    },
  }
}
