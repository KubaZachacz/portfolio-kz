<script>
  export let src;

  const baseURL = "/images/portfolio/";
</script>

<style lang="scss">
  .item-prview {
    display: flex;
    flex-direction: column;
    height: 360px;

    iframe {
      margin: 0 auto;
    }
  }

  .preview-image {
    flex: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>

<div class="item-prview">
  {#if src.includes('youtube')}
    <iframe
      title="video"
      width="80%"
      height="100%"
      {src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
      allowfullscreen />
  {:else}
    <div class="preview-image"
      style={`background-image: url(${baseURL}${src})`} />
  {/if}
</div>
