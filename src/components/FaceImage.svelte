<script>
  import Drawing from "./Drawing.svelte";
  import Lines from "./Lines.svelte";
  import { onMount } from "svelte";
  import { animateParticles } from "../utils/particlesAnimation";
  import anime from "animejs/lib/anime.es.js";
  import { morphCirclePath } from "../utils/consts";
</script>

<style lang="scss">
  :global(.down) {
    transform: translateX(-50%) translateY(100%) !important;
  }

  .face-image-position {
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

  #face-image-container {
    z-index: 10;

    .face-image {
      height: 50vh;
      width: auto;
      &.overlay {
        position: absolute;
        top: 0;
        left: 0;
      }
      @media (max-width: 600px) {
        height: 45vh;
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

  .svg-container {
    position: fixed;
    height: 55vh;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -50;

    @media (max-width: 600px) {
      height: 47.5vh;
    }
  }
</style>

<div class="face-image-section">
  <div id="face-image-container" class="face-image-position scaled">
    <img id="face-image" class="face-image" src="images/kuba-1.svg" alt="moi" />
    <svg
      id="shape-container"
      class="face-image-position"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="shape-wrapper">
        <path id="base-circle" d={morphCirclePath} fill="#8CB5E4" />
      </g>
    </svg>
  </div>
</div>
<div class="svg-container">
  <Drawing />
</div>
