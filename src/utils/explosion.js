import anime from "animejs/lib/anime.es.js";

const SHAPES = {
  circle: 'circle',
  squre: 'square'
}

export function setup() {
  const canvasEl = document.querySelector("canvas");
  const { width: cWidth, height: cHeight } = canvasEl.getBoundingClientRect();

  const ctx = canvasEl.getContext("2d");
  const numberOfParticules = 3;

  const particles = [
    {
      shape: SHAPES.circle,
      colors: ["#FF1461", "#18FF92", "#25A9CC", "#FBF38C", "#FF4D22"],
      range: {
        x: [(3 * cWidth) / 4, cWidth],
        y: [0, cHeight]
      }
    }, {
      shape: SHAPES.squre,
      colors: ["#2D4380", "#A6BEFF", "#5985FF", "#535F80", "#476BCC"],
      range: {
        x: [0, cWidth / 4],
        y: [0, cHeight]
      }
    }
  ]

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

  function createParticule({ startPos, particule }) {
    const p = { ...startPos };
    const { shape, colors, range } = particule;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(100, 150);
    p.endPos = setParticuleDirection(range);
    p.draw = function () {
      ctx.beginPath();
      if (shape === SHAPES.circle) ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
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

  function animateParticules(startPos) {
    const particules = [];
    for (let i = 0; i < numberOfParticules; i++) {
      for (let particule of Object.values(particles)) {
        particules.push(createParticule({ ...{ particule, startPos } }));
      }
      // particules.push(createSquareParticule(x, y));
    }
    anime.timeline().add({
      targets: particules,
      x: function (p) {
        return p.endPos.x;
      },
      y: function (p) {
        return p.endPos.y;
      },
      radius: 1,
      duration: anime.random(2600, 5400),
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

  const centerX = cWidth / 2;
  const centerY = cHeight / 2;

  function autoClick() {
    animateParticules({
      x: anime.random(centerX - 50, centerX + 50),
      y: anime.random(centerY - 50, centerY + 50)
    }
    );
    anime({ duration: 2000 }).finished.then(autoClick);
    // anime({ duration: 200 });
  }

  autoClick();
  setCanvasSize();
  window.addEventListener("resize", setCanvasSize, false);
}
