<script>
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import Carousel from "./Carousel.svelte";
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
    setPreviewHeight(isZoom ? 0.95 * modalHeight : defaultHeight);
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
  $icon-color: #ffffff;
  // $icon-color: #333333;

  .details-modal {
    width: 100%;
    height: 100%;
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
    opacity: 0.7;
  }
  .content {
    padding: 16px;
  }

  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    margin: 0;
  }

  h4 {
    font-weight: 500;
  }

  p {
    margin: 0;
    margin-bottom: 4px;
  }

  .tags {
    margin: 0 0 8px 0;
    font-size: 0.9rem;
  }

  .tools {
    list-style-position: inside;
    margin: 0 0 8px 0;
  }
</style>

<div id="details" class="details-modal">
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
    <span class="zoom-control" title={$_('resizePreview')} on:click={onZoom}>
      {#if isZoom}
        <MinimizeIcon />
      {:else}
        <MaximizeIcon />
      {/if}
    </span>
  </div>
  <div class="content">
    <h3>{title}</h3>
    <p class="tags">
      {#each tags as tag}
        <span>#{tag}{' '}</span>
      {/each}
    </p>
    <p class="tools">
      {$_('tools')}:
      {#each tools as tool, i}
        <li class="tool">{tool}</li>
      {/each}
    </p>
    <p class="description">{description}</p>
  </div>
</div>
