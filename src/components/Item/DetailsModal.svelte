<script>
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import Carousel from "./Carousel.svelte";

  import Preview from "./Preview.svelte";

  export let title;
  export let src;

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

  .details-modal {
    width: 100%;
    height: 100%;
  }

  .gallery-wrapper {
    position: relative;
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
  </div>
</div>
