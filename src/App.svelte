<script>
  // export let name;
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import Introduction from "./components/Introduction.svelte";
  import Head from "./components/Head.svelte";
  import ScrollMagic from "scrollmagic";
  // import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

  // import { controller } from "./stores.js";
  // console.log($dupa)
  const sources = [
    "images/kuba-1.svg",
    "images/kuba-2.svg",
    "images/kuba-3.svg"
  ];
  export const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.3,
      duration: 500,
      offset: 0.3
    }
  });

  onMount(() => {
    const intro1 = new ScrollMagic.Scene({
      triggerElement: "#intro1",
    })
      .setPin("#intro1")
      .on("enter", function(event) {
        document.querySelector("#intro1").classList.remove("hidden");
        document.getElementById("head-section").classList.add("scaled")
      })
      .on("leave", function(event) {
        document.querySelector("#intro1").classList.add("hidden");
        document.getElementById("head-section").classList.remove("scaled")
      })

    const intro2 = new ScrollMagic.Scene({
      triggerElement: "#intro2"
    })
      .setPin("#intro2")
      .setClassToggle("#intro2", "visible");

    const intro3 = new ScrollMagic.Scene({
      triggerElement: "#intro3"
    })
      .setPin("#intro3")
      .setClassToggle("#intro3", "visible");

    const intro4 = new ScrollMagic.Scene({
      triggerElement: "#intro4"
    })
      .setPin("#intro4")
      .setClassToggle("#intro4", "visible");

    controller.addScene([intro1, intro2, intro3, intro4]);

    intro1.triggerHook(0.25).addIndicators();
    intro2.addIndicators();
    intro3.addIndicators();
    intro4.addIndicators();
  });
</script>

<style lang="scss">

</style>

<main>
  <Header />
  <Head />
  <!-- <div style="height: 1000px" /> -->
  <Introduction />

  <div style="height: 1000px" />
</main>
