const SHAPES = {
  circle: "circle",
  squre: "square"
};

const CIRCLE_BASE = {
  shape: SHAPES.circle,
  colors: ["#FF1461", "#18FF92", "#25A9CC", "#FBF38C", "#FF4D22"]
};

const SQUARE_BASE = {
  shape: SHAPES.squre,
  colors: ["#2D4380", "#A6BEFF", "#5985FF", "#535F80", "#476BCC"]
};

export function returnConfig(cWidth, cHeight) {
  return {
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
      animationDuration: 3000,
      loopDuration: 1000,
      fade: 0.005
    },
    fast: {
      numberOfSideParticles: 10,
      particles: [
        {
          ...CIRCLE_BASE,
          range: {
            x: [cWidth / 2, (7 * cWidth) / 8],
            y: [0, cHeight / 2]
          }
        },
        {
          ...SQUARE_BASE,
          range: {
            x: [cWidth / 8, cWidth / 2],
            y: [0, cHeight / 2]
          }
        }
      ],
      startPos: {
        x: cWidth / 2,
        y: cHeight / 2
      },
      animationDuration: 1500,
      loopDuration: 200,
      fade: 0.01
    },
    turbo: {
      numberOfSideParticles: 15,
      particles: [
        {
          ...CIRCLE_BASE,
          range: {
            x: [cWidth / 2, (5 * cWidth) / 6],
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
      fade: 0.025
    }
  };
}