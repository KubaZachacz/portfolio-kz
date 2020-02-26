<script>
  import Lines from "./Lines.svelte";
  import { onMount } from "svelte";
  import { animateParticles } from "../utils/particlesAnimation";
  import anime from "animejs/lib/anime.es.js";

  onMount(() => {
    const stop = animateParticles("slow");
    setTimeout(() => {
      stop();
      setTimeout(() => {
        const stop = animateParticles("fast");
      }, 5000);
    }, [5000]);
  });
</script>

<style lang="scss">
  :global(.down) {
    bottom: -50vh !important;
  }

  #head-section {
    position: fixed;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: center bottom;
    transition: transform 0.7s, bottom 5s;
    z-index: 10;

    // &::before {
    //   content: "";
    //   position: absolute;
    //   top: 60%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    //   width: 35vh;
    //   height: 35vh;
    //   border-radius: 50%;
    //   background: #9b8579;
    //   box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.5);
    //   opacity: 0.5;
    //   z-index: -1;
    // }
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

    &.scaled {
      transform: translateX(-50%) scale(1.2);
    }

    .animation-container {
      position: absolute;
      width: 150%;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    canvas {
      z-index: -5;
    }

    svg {
      z-index: -10;
      g,
      path {
        transform-origin: center;
        transform-box: fill-box;
      }
    }
  }
</style>

<div id="head-section" class="scaled">
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
  <canvas class="animation-container" />
  <svg
    class="animation-container"
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

</div>
