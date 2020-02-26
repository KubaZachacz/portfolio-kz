<script>
  import { onMount } from "svelte";
  import ScrollMagic from "scrollmagic";
  import { controller } from "../stores.js";
  import { _ } from "svelte-i18n";

  onMount(() => {
    // new ScrollMagic.Scene({
    //   // triggerHook: 0,
    //   duration: 500
    //   // offset: -250
    // })
    //   .on("enter", function(event) {
    //     document.querySelector("header").classList.remove("hidden");
    //   })
    //   .on("leave", function(event) {
    //     document.querySelector("header").classList.add("hidden");
    //   })
    //   // .setClassToggle("#first-section", "hidden")
    //   .addIndicators()
    //   .addTo($controller);
  });
</script>

<style lang="scss">
  header {
    color: #002d8d;
  }
  h2,
  h1 {
    // text-transform: uppercase;
    font-weight: 100;
    transition: all 1s;
    width: fit-content;
    // text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  h1 {
    font-size: 3.5rem;
    margin: 1rem 0;
  }

  h2 {
    font-size: 3rem;
    margin: 0 0;
  }
  :global(.hidden) {
    h1,
    h2 {
      left: 0;
      transform: translateX(0);
    }
    h1 {
      font-size: 2rem;
      margin: 0.25rem 0;
    }
    h2 {
      font-size: 1.25rem;
    }
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>

<header>
  <h1>Kuba Zachacz</h1>
  <h2>Frontend Developer, engineer</h2>
  <!-- <h2>{$_('title')}</h2> -->
</header>
