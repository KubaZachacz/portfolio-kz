import anime from "animejs/lib/anime.es.js";

const SHAPES = {
  circle: "circle",
  squre: "square"
};

export function animateParticles(mode = "fast") {
  const canvasEl = document.querySelector("canvas");
  const { width: cWidth, height: cHeight } = canvasEl.getBoundingClientRect();

  const ctx = canvasEl.getContext("2d");

  let isStopped = false;

  const config = {
    slow: {
      numberOfSideParticles: 3,
      particles: [
        {
          shape: SHAPES.circle,
          colors: ["#FF1461", "#18FF92", "#25A9CC", "#FBF38C", "#FF4D22"],
          range: {
            x: [(3 * cWidth) / 4, cWidth],
            y: [0, cHeight]
          }
        },
        {
          shape: SHAPES.squre,
          colors: ["#2D4380", "#A6BEFF", "#5985FF", "#535F80", "#476BCC"],
          range: {
            x: [0, cWidth / 4],
            y: [0, cHeight]
          }
        }
      ],
      animationDuration: 2500,
      loopDuration: 2000
    },
    fast: {
      numberOfSideParticles: 10,
      particles: [
        {
          shape: SHAPES.circle,
          colors: ["#FF1461", "#18FF92", "#25A9CC", "#FBF38C", "#FF4D22"],
          range: {
            x: [cWidth / 2, cWidth],
            y: [0, cHeight / 3]
          }
        },
        {
          shape: SHAPES.squre,
          colors: ["#2D4380", "#A6BEFF", "#5985FF", "#535F80", "#476BCC"],
          range: {
            x: [0, cWidth / 2],
            y: [0, cHeight / 3]
          }
        }
      ],
      animationDuration: 1500,
      loopDuration: 200
    }
  };

  const {
    numberOfSideParticles,
    particles,
    animationDuration,
    loopDuration
  } = config[mode];

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
    p.draw = function() {
      ctx.beginPath();
      if (shape === SHAPES.circle)
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      else if (shape === SHAPES.squre) ctx.rect(p.x, p.y, p.radius, p.radius);
      ctx.fillStyle = p.color;
      ctx.fill();
    };
    return p;
  }

  function renderParticule(anim) {
    for (let i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  }

  function animateParticles(startPos) {
    const outputParticles = [];
    for (let i = 0; i < numberOfSideParticles; i++) {
      for (let particle of Object.values(particles)) {
        outputParticles.push(createParticule({ ...{ particle, startPos } }));
      }
    }
    anime.timeline().add({
      targets: outputParticles,
      x: function(p) {
        return p.endPos.x;
      },
      y: function(p) {
        return p.endPos.y;
      },
      radius: 1,
      duration: anime.random(animationDuration, 2 * animationDuration),
      easing: "easeOutExpo",
      update: renderParticule
    });
  }

  const render = anime({
    duration: Infinity,
    update: function() {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  });

  function autoClick() {
    if (isStopped) return;
    animateParticles({
      x: cWidth / 2,
      y: cHeight / 2
    });
    anime({ duration: loopDuration }).finished.then(autoClick);
  }

  autoClick();
  setCanvasSize();
  window.addEventListener("resize", setCanvasSize, false);

  return () => {
    isStopped = true;
  };
}
