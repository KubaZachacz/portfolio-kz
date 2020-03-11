<script>
  export let src;
  export let id;

  const baseURL = "/images/portfolio/";
</script>

<style lang="scss">
  .item-prview {
    // border: 1px solid #eee;
    display: flex;
    flex-direction: column;
  }

  .item-prview header {
    flex: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .preview-zoom {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
  }
</style>

<div class="item-prview">
  {#if src.includes('youtube')}
    <iframe
      title="video"
      width="560"
      height="315"
      {src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
      allowfullscreen />
  {:else}
    <header
      style={`background-image: url(${baseURL}${src})`} />
  {/if}
</div>
