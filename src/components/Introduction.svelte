<script>
  import { onMount } from "svelte";
  import ScrollMagic from "scrollmagic";
  import ScrollIcon from "./ScrollIcon.svelte";
  import { _ } from "svelte-i18n";
  import { viewedFlag } from "../store/store";

  let wasTimelineViewd;

  const unsubscribe = viewedFlag.subscribe(value => {
    wasTimelineViewd = value;
  });

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
  p {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    font-size: 20px;
    line-height: 2.2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  .actual-introduction {
    text-align: justify;
    text-indent: 1em;
    p {
      line-height: 1.8rem;
    }
  }
  .additional-text {
    font-weight: 300;
    font-style: italic;
  }
  #intro-5 {
    background: white;
  }
</style>

<div>
  <section id="intro-1" class="hidable">
    <p>{$_('intro-1')}</p>
    <p>
      {#if wasTimelineViewd}
        <a href="#timeline">{$_('intro-1-b')}</a>
      {/if}
    </p>
    <p>
      <ScrollIcon />
    </p>
  </section>
  <div style="height: 200px" />
  <section id="intro-2" class=" showable">
    <p>{$_('intro-2')}</p>
  </section>
  <section id="intro-2-b" class=" showable">
    <p>{$_('intro-2-b')} &#x1F643;</p>
  </section>
  <div style="height: 200px" />
  <section id="intro-3" class="showable">
    <p>
      <em>{$_('intro-3')}</em>
    </p>
  </section>
  <div style="height: 200px" />
  <section id="intro-4" class="showable">
    <p>
      <em>{$_('intro-4')}</em>
    </p>
    <p class="additional-text">
      {#if wasTimelineViewd}
        {$_('intro-4-c')}
      {:else}
        {$_('intro-4-b')}
      {/if}
    </p>
  </section>
  <div style="height: 100px" />
  <section id="intro-5" class="showable">
    <p>
      &#x1F525;
      <em>
        <strong>{$_('intro-5')}</strong>
      </em>
      &#x1F525;
    </p>
  </section>
  <div style="height: 200px" />
</div>
