<script>
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import Introduction from "./components/Introduction.svelte";
  import Head from "./components/Head.svelte";

  import init from "./utils/init";

  const sources = [
    "images/kuba-1.svg",
    "images/kuba-2.svg",
    "images/kuba-3.svg"
  ];

  onMount(() => {
    init();
  });
</script>

<style lang="scss">

</style>

<main>
  <Header />
  <Head />
  <Introduction />

  <div style="height: 1000px" />
</main>
