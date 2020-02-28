import anime from "animejs/lib/anime.es.js";
import Color from "color";
import { returnConfig } from './particlesConfig'

const SHAPES = {
  circle: "circle",
  squre: "square"
};

export function animateParticles() {
  const canvasEl = document.querySelector("canvas");

  const ctx = canvasEl.getContext("2d");

  let mode = "slow";
  let config = {};

  function setCanvasSize() {
    const { width, height } = canvasEl.getBoundingClientRect();

    canvasEl.width = width;
    canvasEl.height = height;

    config = returnConfig(width, height);
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
        ctx.rect(p.x - a / 2, p.y - a / 2, a, a);
      }
      ctx.fillStyle = p.color;
      ctx.fill();
    };
    return p;
  }

  function renderParticule(anim) {
    const { fade } = config[mode];
    for (let i = 0; i < anim.animatables.length; i++) {
      const { color, draw } = anim.animatables[i].target;

      anim.animatables[i].target.color = Color(color).fade(fade);
      draw();
    }
  }

  function animateParticles(config) {
    const { startPos, numberOfSideParticles, animationDuration } = config;

    const outputParticles = [];
    for (let i = 0; i < numberOfSideParticles; i++) {
      for (let particle of Object.values(config.particles)) {
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

  function startAnimation(config) {

    clearInterval(animationInterval);
    animateParticles(config);
    animationInterval = setInterval(() => {
      animateParticles(config);
    }, config.loopDuration);
  }

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize, false);

  return {
    stopParticlesAnimation: () => clearInterval(animationInterval),
    startParticlesAnimation: (newMode = "slow") => {
      mode = newMode;
      setCanvasSize();
      startAnimation(config[mode]);
    },
    singleParticlesAnimation: () => animateParticles(config['slow'])
  };
}
