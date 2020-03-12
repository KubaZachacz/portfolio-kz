<script>
  import { onMount } from "svelte";
  import Modal from "svelte-simple-modal";
  import Header from "./components/Header.svelte";
  import Introduction from "./components/Introduction.svelte";
  import Head from "./components/Head.svelte";
  import Timeline from "./components/Timeline.svelte";
  import initScroll from "./utils/scrollHandlers";
  import { setupLocale } from "./locale/setup";

  const sources = [
    "images/kuba-1.svg",
    "images/kuba-2.svg",
    "images/kuba-3.svg"
  ];

  setupLocale();

  onMount(() => {
    initScroll();
  });
</script>

<style lang="scss">

</style>

<main>
  <Header />
  <Head />
  <Introduction />
  <div style="height: 300px" />
  <Modal
    key="details-modal"
    styleWindow={{ width: 'auto', minWidth: '300px', height: '95vh', minHeight: '400px' }}>
    <Timeline />
  </Modal>
</main>
