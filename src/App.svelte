<script>
  // export let name;
  import Lines from "./components/Lines.svelte";

  const sources = [
    "images/kuba-1.svg",
    "images/kuba-2.svg",
    "images/kuba-3.svg"
  ];
  const controller = new ScrollMagic.Controller();

  //   .on("progress", function(e) {
  //     const headImage = document.getElementById("head-image");

  //     const progress = Math.round(e.progress * 10);
  //     if (progress < sources.length) {
  //       headImage.src = sources[progress];
  //     }
  //     console.log(progress);

  new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 200
  })
    .setPin("#first-section")
    .on("enter", function(event) {
      console.log("Scene entered.");
      document.querySelector("header").classList.remove("hidden");
    })
    .on("leave", function(event) {
      console.log("Scene left.");
      document.querySelector("header").classList.add("hidden");
    })
    .addIndicators()
    .addTo(controller);
</script>

<style lang="scss">
  header {
    color: #002d8d;
  }
  h2,
  h1 {
    text-transform: uppercase;
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
  main {
    // text-align: center;
    margin: 0 auto;
    position: relative;
  }

  :global(.hidden) {
    h1,
    h2 {
      left: 0;
      transform: translateX(0);
      // text-align: left;
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

  .head-section {
    width: 300px;
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .head-section::before {
    content: "";
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: #9b8579;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.5);
    opacity: 0.5;
    z-index: -1;
  }

  section {
    text-align: center;
  }
  #first-section {
    margin-top: 25vh;
  }
</style>

<main>

  <header>
    <h1>Kuba Zachacz</h1>
    <h2>Fronted Developer</h2>
  </header>

  <!-- <div class="head-section">
    <img id="head-image" src="images/kuba-1.svg" alt="moi" />
    <Lines />

  </div> -->
  <div style="height: 1000px" />
  <div id="trigger1" class="spacer s0" />
  <section id="first-section">
    <p>Scroll for more info!</p>
  </section>
  <div style="height: 1000px" />
</main>
