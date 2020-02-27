<script>
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
  #particles-container {
    position: fixed;
    height: 55vh;
    width: 50vw;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: -5;
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
        d="M454 336C454 381.279 437.094 422.608 409.25 454.022C376.64 490.812
        329.028 514 276 514C226.304 514 181.364 493.634 149.072 460.793C117.486
        428.67 98 384.611 98 336C98 284.392 119.963 237.914 155.052
        205.402C186.803 175.983 229.301 158 276 158C325.206 158 369.749 177.966
        401.969 210.239C434.12 242.443 454 286.9 454 336Z"
        fill="#8CB5E4" />
    </g>
  </svg>
  <canvas id="particles-container" class="head-position" />
</div>
