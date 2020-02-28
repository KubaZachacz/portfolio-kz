<script>
  import { onMount } from "svelte";
  import ScrollMagic from "scrollmagic";
  import { controller } from "../stores.js";
  import { _ } from "svelte-i18n";

  onMount(() => {

  });
</script>

<style lang="scss">
  header {
    color: #002d8d;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%
    );
    z-index: 10;
  }
  h2,
  h1 {
    font-weight: 100;
    transition: all 1s;
    width: fit-content;
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
  :global(.navbar) {
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

<header id="page-header">
  <h1>Kuba Zachacz</h1>
  <h2>Frontend Developer</h2>
  <!-- <h2>{$_('title')}</h2> -->
</header>
