<script>
  import Lines from "./Lines.svelte";
</script>

<style lang="scss">
  #head-section {
    position: fixed;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: center bottom;
    transition: transform 0.7s;

    &::before {
      content: "";
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 35vh;
      height: 35vh;
      border-radius: 50%;
      background: #9b8579;
      box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.5);
      opacity: 0.5;
      z-index: -1;
    }

    img {
      height: 50vh;
      width: auto;
    }

    &.scaled {
      transform: translateX(-50%) scale(1.2);
    }
  }
</style>

<div id="head-section" class="scaled">
  <img id="head-image" src="images/kuba-1.svg" alt="moi" />
  <!-- <Lines /> -->

</div>
