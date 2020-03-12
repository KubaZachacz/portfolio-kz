<script>
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import Carousel from "./Carousel.svelte";

  import Preview from "./Preview.svelte";

  export let title;
  export let description;
  export let srcType;
  export let src;
  export let tags;
  export let tools;

  const modalPaddingPx = 16;
  const titleHeightPx = 44;

  const defaultHeight = 360;
  let modalHeight;

  const setPreviewHeight = height => {
    const previews = document.querySelectorAll(".item-prview");
    for (let preview of previews) {
      preview.style.height = `${height}px`;
    }
  };

  onMount(() => {
    const details = document.getElementsByClassName("window")[0];
    modalHeight = details.getBoundingClientRect().height;
    const calculatedHeight = modalHeight - 2*modalPaddingPx - titleHeightPx
    if (calculatedHeight > defaultHeight) setPreviewHeight(calculatedHeight);

  });
</script>

<style lang="scss">
  $icon-color: #ffffff;

  .details-modal {
    width: 100%;
    height: 100%;
  }

  .gallery-wrapper {
    position: relative;
  }

  // .zoom-control {
  //   width: 40px;
  //   position: absolute;
  //   bottom: 20px;
  //   right: 2vw;
  //   color: $icon-color;
  //   cursor: pointer;
  //   mix-blend-mode: difference;
  //   opacity: 0.7;
  // }
  .content {
    width: 85%;
    margin: 0 auto;
    padding: 16px;
  }

  h4 {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0em;
    margin: 0 0 8px 0;
    padding: 8px;
    border-bottom: 1px solid rgba(0,0,0,0.7);
  }

</style>

<div id="details" class="details-modal">
  <h4>{title}</h4>

  <div class="gallery-wrapper">
    {#if Array.isArray(src)}
      <Carousel perPage={1}>
        {#each src as srcUrl}
          <Preview src={srcUrl} />
        {/each}
      </Carousel>
    {:else}
      <Preview {src} />
    {/if}
    <!-- <span class="zoom-control" title={$_('resize-preview')} on:click={onZoom}>
      {#if isZoom}
        <MinimizeIcon />
      {:else}
        <MaximizeIcon />
      {/if}
    </span> -->
  </div>
</div>
