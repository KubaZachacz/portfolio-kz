<script>
  import { onMount } from "svelte";
  import ScrollMagic from "scrollmagic";
  import ScrollIcon from "./ScrollIcon.svelte";
  //   import { controller } from "../stores.js";

  onMount(() => {});
</script>

<style lang="scss">
  section {
    text-align: center;
  }
  #first-intro {
    margin-top: 20vh;
  }
  :global(.showable) {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  :global(.showable.visible) {
    opacity: 1;
  }
  :global(.hidable) {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
  :global(.hidable.hidden) {
    opacity: 0;
  }
</style>

<div>
  <section id="intro1" class="hidable">
    <p>
      Scroll down for more info
      <ScrollIcon />
    </p>
  </section>
  <div style="height: 200px" />
  <section id="intro2" class="showable">
    <p>Wait, what's happening?!</p>
  </section>
  <div style="height: 200px" />
  <section id="intro3" class="showable">
    <p>A little more harder!</p>
  </section>
  <div style="height: 200px" />
  <section id="intro4" class="showable">
    <p>It's working!</p>
  </section>
  <div style="height: 200px" />
</div>
