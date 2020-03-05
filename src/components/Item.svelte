<script>
  import { _ } from "svelte-i18n";
  export let id;
  export let srcType;
  export let src;
</script>

<style lang="scss">
  .item {
    width: 45%;
    img,
    iframe {
      width: 100%;
    }
  }
</style>

<div class="item">
  <h3 class="title">{$_(`${id}.title`)}</h3>

  {#if srcType === 'img'}
    <img src={`images/portfolio/${src}`} alt={$_(`${id}.alt`)} />
  {:else}
    <iframe
      title={$_(`${id}.alt`)}
      width="560"
      height="315"
      {src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
      allowfullscreen />
  {/if}
  <p>{$_(`${id}.description`)}</p>
  <!-- <button>CLICKME</button> -->
</div>
