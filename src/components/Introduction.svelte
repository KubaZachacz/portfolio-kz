<script>
  import { onMount } from "svelte";
  import ScrollMagic from "scrollmagic";
  import ScrollIcon from "./ScrollIcon.svelte";
  import { _ } from "svelte-i18n";

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
    line-height: 2.4rem;
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
  }
</style>

<div>
  <section id="intro-1" class="hidable">
    <p>
      {$_('intro-1')}
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
      <em>{$_('intro-4-b')}</em>
    </p>
  </section>
  <div style="height: 100px" />
  <section id="intro-5" class="showable">
    <p>
      <em>
        <strong>{$_('intro-5')}</strong>
      </em>
    </p>
  </section>
  <div style="height: 200px" />
</div>
