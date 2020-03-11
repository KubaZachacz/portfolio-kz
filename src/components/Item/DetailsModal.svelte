<script>
  import { onMount } from "svelte";
  import Carousel from "@beyonk/svelte-carousel";
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    MaximizeIcon,
    MinimizeIcon
  } from "svelte-feather-icons";

  import Preview from "./Preview.svelte";

  export let title;
  export let description;
  export let srcType;
  export let src;
  export let tags;
  export let tools;

  let isZoom = false;
  const defaultHeight = 360;
  let modalHeight = defaultHeight;

  const onZoom = () => {
    isZoom = !isZoom;
    setPreviewHeight(isZoom ? 0.9 * modalHeight : defaultHeight);
  };

  const setPreviewHeight = height => {
    const previews = document.querySelectorAll(".item-prview");
    for (let preview of previews) {
      preview.style.height = `${height}px`;
    }
  };

  onMount(() => {
    const details = document.getElementsByClassName("window")[0];
    modalHeight = details.getBoundingClientRect().height;

    setPreviewHeight(defaultHeight);
  });
</script>

<style lang="scss">
  $icon-color: rgb(212, 212, 212);
  .details-modal {
    width: 100%;
    height: 100%;
  }

  .control :global(svg) {
    width: 100%;
    height: 100%;
    color: $icon-color;
    border: 2px solid $icon-color;
    border-radius: 32px;
  }
  .gallery-wrapper {
    position: relative;
  }
  .zoom-control {
    width: 40px;
    position: absolute;
    bottom: 20px;
    right: 2vw;
    color: $icon-color;
    cursor: pointer;
    mix-blend-mode: difference;
    opacity: 0.6;
  }
</style>

<div id="details" class="details-modal">
  <h3>{title}</h3>
  <div class="gallery-wrapper">
    {#if Array.isArray(src)}
      <Carousel perPage={1}>
        <span class="control" slot="left-control">
          <ChevronLeftIcon />
        </span>
        {#each src as srcUrl}
          <Preview src={srcUrl} />
        {/each}
        <span class="control" slot="right-control">
          <ChevronRightIcon />
        </span>
      </Carousel>
    {:else}
      <Preview {src} />
    {/if}
    <span class="zoom-control" title="Resize gallery" on:click={onZoom}>
      {#if isZoom}
        <MinimizeIcon />
      {:else}
        <MaximizeIcon />
      {/if}
    </span>
  </div>
  <p>{description}</p>
</div>
