import anime from "animejs/lib/anime.es.js";

export function setup() {
  const canvasEl = document.querySelector("canvas");
  const { width: cWidth, height: cHeight } = canvasEl.getBoundingClientRect();

  var ctx = canvasEl.getContext("2d");
  var numberOfParticules = 3;

  var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

  function setCanvasSize() {
    canvasEl.width = cWidth;
    canvasEl.height = cHeight;
  }

  function setCircleParticuleDirection(p) {
    return {
      x: anime.random((3 * cWidth) / 4, cWidth),
      y: anime.random(0, cHeight)
    };
  }

  function createCircleParticule(x, y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(100, 200);
    p.endPos = setCircleParticuleDirection(p);
    p.draw = function() {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      // ctx.rect(p.x, p.y, p.radius, p.radius);
      ctx.fillStyle = p.color;
      ctx.fill();
    };
    return p;
  }

  function setSquareParticuleDirection(p) {
    return {
      x: anime.random(0, cWidth / 4),
      y: anime.random(0, cHeight)
    };
  }

  function createSquareParticule(x, y) {
    var p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(100, 200);
    p.endPos = setSquareParticuleDirection(p);
    p.draw = function() {
      ctx.beginPath();
      // ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.rect(p.x, p.y, p.radius, p.radius);
      ctx.fillStyle = p.color;
      ctx.fill();
    };
    return p;
  }

  function renderParticule(anim) {
    for (var i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  }

  function animateParticules(x, y) {
    var particules = [];
    for (var i = 0; i < numberOfParticules; i++) {
      particules.push(createCircleParticule(x, y));
      particules.push(createSquareParticule(x, y));
    }
    anime.timeline().add({
      targets: particules,
      x: function(p) {
        return p.endPos.x;
      },
      y: function(p) {
        return p.endPos.y;
      },
      radius: 1,
      duration: anime.random(2600, 5400),
      easing: "easeOutExpo",
      update: renderParticule
    });
  }

  var render = anime({
    duration: Infinity,
    update: function() {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  });

  var centerX = cWidth / 2;
  var centerY = cHeight / 2;

  function autoClick() {
    if (window.human) return;
    animateParticules(
      anime.random(centerX - 50, centerX + 50),
      anime.random(centerY - 50, centerY + 50)
    );
    anime({ duration: 2500 }).finished.then(autoClick);
    // anime({ duration: 200 });
  }

  autoClick();
  setCanvasSize();
  window.addEventListener("resize", setCanvasSize, false);
}
