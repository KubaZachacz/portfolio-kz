<script>
  import Drawing from "./Drawing.svelte";
  import Lines from "./Lines.svelte";
  // import Art from "./Art.svelte";
  import { onMount } from "svelte";
  import { animateParticles } from "../utils/particlesAnimation";
  import anime from "animejs/lib/anime.es.js";
  import { morphCriclePath } from "../utils/consts";
  export const initCirclePath = morphCriclePath;
  onMount(() => {});
</script>

<style lang="scss">
  :global(.down) {
    transform: translateX(-50%) translateY(100%) !important;
  }

  .head-position {
    display: block;
    position: fixed;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: center bottom;
    transition: transform 0.7s;

    &.scaled {
      transform: translateX(-50%) scale(1.2);
      @media (max-height: 700px) {
        transform: translateX(-50%) scale(1.1);
      }
    }
  }

  #head-container {
    z-index: 10;

    .head {
      height: 50vh;
      width: auto;
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
    height: 100%;

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
  .svg-container {
    position: fixed;
    height: 55vh;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -50;
  }
</style>

<div class="head-section">
  <div id="head-container" class="head-position scaled">
    <img id="head-image" class="head" src="images/kuba-1.svg" alt="moi" />
    <svg
      id="shape-container"
      class="head-position"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="shape-wrapper">
        <path id="base-circle" d={initCirclePath} fill="#8CB5E4" />
      </g>
    </svg>
  </div>
</div>
<div class="svg-container">
  <Drawing />
</div>
