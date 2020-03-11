<script>
  // https://github.com/beyonk-adventures/svelte-carousel/blob/master/src/Carousel.svelte
  import Siema from "siema";
  import { onMount, createEventDispatcher } from "svelte";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  export let perPage = 3;
  export let loop = true;
  export let autoplay = 0;
  export let duration = 200;
  export let easing = "ease-out";
  export let startIndex = 0;
  export let draggable = true;
  export let multipleDrag = true;
  export let threshold = 20;
  export let rtl = false;

  let siema;
  let controller;
  let timer;
  const dispatch = createEventDispatcher();
  $: pips = controller ? controller.innerElements : [];

  onMount(() => {
    controller = new Siema({
      selector: siema,
      perPage,
      loop,
      duration,
      easing,
      startIndex,
      draggable,
      multipleDrag,
      threshold,
      rtl,
      onChange: handleChange
    });

    autoplay && setInterval(right, autoplay);
    return () => {
      autoplay && clearTimeout(timer);
      controller.destroy();
    };
  });

  function left() {
    controller.prev();
  }

  function right() {
    controller.next();
  }

  function handleChange(event) {
    dispatch("change", {
      currentSlide: controller.currentSlide,
      slideCount: controller.innerElements.length
    });
  }
</script>

<style lang="scss">
  $icon-color: #ffffff;

  .carousel {
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    z-index: 50;
    transform: translateY(-50%);
    border-radius: 25%;
    background-color: transparent;
    mix-blend-mode: difference;
    opacity: 0.7;
    border: 2px solid $icon-color;

    mix-blend-mode: difference;
    opacity: 0.7;
  }

  button :global(svg) {
    width: 100%;
    height: 100%;
    color: $icon-color;
  }

  .left {
    left: 2vw;
  }

  .right {
    right: 2vw;
  }
</style>

<div class="carousel">
  <button class="left" on:click={left} aria-label="move gallery left">
    <ChevronLeftIcon />
  </button>
  <div class="slides" bind:this={siema}>
    <slot />
  </div>
  <button class="right" on:click={right} aria-label="move gallery right">
    <ChevronRightIcon />
  </button>
</div>
