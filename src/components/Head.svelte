<script>
  import Drawing from "./Drawing.svelte";
  import Lines from "./Lines.svelte";
  // import Art from "./Art.svelte";
  import { onMount } from "svelte";
  import { animateParticles } from "../utils/particlesAnimation";
  import anime from "animejs/lib/anime.es.js";

  onMount(() => {});
</script>

<style lang="scss">
  :global(.down) {
    transform: translateX(-50%) translateY(100%) !important;
  }

  .head-position {
    position: fixed;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: center bottom;
    transition: transform 0.7s;

    &.scaled {
      transform: translateX(-50%) scale(1.2);
    }
  }

  #head-container {
    z-index: 10;

    .head {
      height: 50vh;
      width: auto;
      opacity: 0;
      &.overlay {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    :global(.visible) {
      opacity: 1 !important;
    }
  }
  #shape-container {
    z-index: -10;
    height: 50vh;

    g,
    path {
      transform-origin: center;
      transform-box: fill-box;
    }
  }
  .lines-container,
  #particles-container {
    position: fixed;
    height: 55vh;
    width: 50vw;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -50;
  }
</style>

<div class="head-section">
  <div id="head-container" class="head-position scaled">
    <img id="head-3" class="head" src="images/kuba-3.svg" alt="moi" />
    <img
      id="head-2"
      class="head overlay visible"
      src="images/kuba-2.svg"
      alt="moi" />
    <img
      id="head-1"
      class="head overlay visible"
      src="images/kuba-1.svg"
      alt="moi" />
  <Lines />

    <!-- <Art /> -->
  </div>
  <svg
    id="shape-container"
    class="head-position"
    viewBox="0 0 560 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g id="shape-wrapper">
      <path
        id="base-circle"
        d="M454 336C454 346.224 453.138 356.247 451.483 366C449.669 376.688
        446.902 387.051 443.273 397C438.9 408.988 433.275 420.374 426.556
        431C421.406 439.144 415.614 446.842 409.25 454.022C401.2 463.104 392.235
        471.358 382.5 478.638C372.727 485.946 362.179 492.274 351
        497.475C346.276 499.673 341.439 501.67 336.5 503.454C329.842 505.86 323
        507.88 316 509.488C303.142 512.44 289.753 514 276 514C268.551 514
        261.209 513.542 254 512.654C245.815 511.645 237.802 510.08 230
        507.999C218.683 504.98 207.81 500.874 197.5 495.8C190.204 492.209 183.19
        488.133 176.5 483.615C166.604 476.931 157.416 469.279 149.072
        460.793C142.426 454.034 136.316 446.747 130.81 439C125.315 431.268
        120.423 423.079 116.2 414.5C113.41 408.83 110.912 402.99 108.727
        397C106.647 391.297 104.85 385.458 103.354 379.5C99.8569 365.579 98
        351.006 98 336C98 322.247 99.5598 308.858 102.512 296C104.607 286.879
        107.402 278.026 110.838 269.5C113.116 263.847 115.676 258.339 118.5
        252.991C122.17 246.042 126.286 239.366 130.81 233C137.93 222.983 146.06
        213.734 155.052 205.402C162.909 198.122 171.425 191.542 180.5
        185.761C188.277 180.807 196.464 176.441 205 172.724C215.969 167.947
        227.514 164.244 239.5 161.746C251.281 159.291 263.49 158 276 158C289.575
        158 302.795 159.52 315.5 162.398C327.323 165.077 338.7 168.933 349.5
        173.836C362.201 179.601 374.104 186.815 385 195.266C390.971 199.897
        396.638 204.9 401.969 210.239C407.379 215.658 412.441 221.424 417.12
        227.5C423.271 235.488 428.758 244.012 433.5 252.991C437.804 261.14
        441.494 269.664 444.508 278.5C448.225 289.396 450.915 300.768 452.462
        312.5C453.477 320.189 454 328.034 454 336Z"
        fill="#8CB5E4" />
    </g>
  </svg>
  <canvas id="particles-container" class="head-position" />
  <Drawing />
</div>
