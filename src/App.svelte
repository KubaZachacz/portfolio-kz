<script>
  import { onMount } from "svelte";
  import Modal from "svelte-simple-modal";
  import CookieBanner from "./components/CookieBanner.svelte";
  import Header from "./components/Header.svelte";
  import Introduction from "./components/Introduction.svelte";
  import FaceImage from "./components/FaceImage.svelte";
  import TimelineLines from "./components/Timeline/TimelineLines.svelte";
  import TimelineItems from "./components/Timeline/TimelineItems.svelte";
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

<CookieBanner />
<Header />
<main>
  <TimelineLines />
  <FaceImage />
  <Introduction />
  <div style="height: 50px" />
  <Modal
    key="details-modal"
    styleWindow={{ width: 'auto', height: '95vh', margin: 0 }}
    styleContent={{ maxHeight: 'unset' }}>
    <TimelineItems />
  </Modal>
</main>
