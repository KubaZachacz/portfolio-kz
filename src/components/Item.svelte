<script>
  import { _ } from "svelte-i18n";
  export let id;
  export let srcType;
  export let src;
  export let minSrc;
  export let tags;
  export let tools;
</script>

<style lang="scss">
  .item-container {
    width: 100%;
    display: flex;
    &:nth-of-type(even) {
      justify-content: flex-end;
    }
  }

  .item-column {
    position: relative;
    margin-top: -10%;
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .item {
    display: flex;
    flex-direction: column;
    // width: 45%;
    width: 100%;
    max-width: 500px;
    overflow: hidden;
    background: white;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    img,
    iframe {
      width: 100%;
    }
  }

  .content {
    padding: 16px;
  }

  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    margin: 0 0 8px 0;
  }

  h4 {
    font-weight: 500;
  }

  p {
    margin: 0;
    margin-bottom: 4px;
  }

  .tags {
    margin: 0;
    font-size: 0.9rem;
    // font-weight: 300;
  }

  .tools {
    list-style-position: inside;
    margin: 0 0 8px 0;
  }

  .miniature-placeholder {
    // width: 240px;
    // height: 200px;
    width: 100%;
    height: 300px;
    // border-radius: 50%;
    // border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    // background-size: 125%;
    background-size: cover;
    // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }

  .description {
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dynks {
    position: absolute;
    width: 50%;
    height: 4px;
    background: blue;
    top: 50%;
    right: 0;
    z-index: -1;
  }
</style>

<div class="item-container">
  <div class="item-column">
    <div class="item">
      <div
        class="miniature-placeholder"
        style="background-image: url({`images/portfolio/${minSrc}`})" />
      <div class="content">
        <p class="tags">
          {#each tags as tag}
            <span>#{tag}{' '}</span>
          {/each}
        </p>
        <h3 class="title">{$_(`${id}.title`)}</h3>
        <p class="tools">
          {$_('tools')}:
          {#each tools as tool, i}
            <li class="tool">{tool}</li>
          {/each}
        </p>
        <p class="description">{$_(`${id}.description`)}</p>
        <a href="#">{$_('readMore')}</a>
      </div>
    </div>
    <!-- <div class="dynks" /> -->
  </div>
</div>
