<script>
  import { _ } from "svelte-i18n";
  import { getContext } from "svelte";
  import DetailsModal from "./DetailsModal.svelte";
  import { MaximizeIcon, ImageIcon, VideoIcon } from "svelte-feather-icons";

  export let index;
  export let id;
  export let srcType;
  export let src;
  export let minSrc;
  export let tags;
  export let tools;

  const description = $_(`${id}.description`);
  const title = $_(`${id}.title`);

  const { open } = getContext("details-modal");
  const showDetails = event => {
    event.preventDefault();
    open(DetailsModal, { title, description, srcType, src, tags, tools });
  };
</script>

<style lang="scss">
  .item-container {
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width: 1300px) {
      justify-content: left;
    }
  }

  .right {
    @media (min-width: 1300px) {
      justify-content: flex-end;
    }

    .dynks {
      background: rgba(255, 20, 99, 1);
      left: 0;

      &:after {
        background: rgba(255, 20, 99, 1);
        background: linear-gradient(
          45deg,
          rgba(128, 10, 49, 1) 0%,
          rgba(255, 20, 99, 1) 70%,
          rgba(255, 97, 150, 1) 100%
        );
        @media (min-width: 1300px) {
          right: unset;
          left: -14px;
        }
      }
    }
  }

  .dynks {
    position: absolute;
    width: 100%;
    top: 0;
    background: rgb(89, 133, 255);

    @media (min-width: 1300px) {
      width: 50%;
      height: 4px;
      top: unset;
      bottom: 25%;
      z-index: -1;
      right: 0;
    }

    &:after {
      content: "";
      position: absolute;
      width: 28px;
      height: 28px;
      top: -10px;
      background: rgb(89, 133, 255);
      background: linear-gradient(
        45deg,
        rgba(45, 67, 128, 1) 0%,
        rgba(89, 133, 255, 1) 70%,
        rgba(166, 190, 255, 1) 100%
      );
      border-radius: 50%;
      left: 50%;
      transform: translate(-50%, -10%);
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

      @media (min-width: 1300px) {
        right: -14px;
        left: unset;
        transform: none;
      }
    }
  }

  .item-column {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 48px;
    width: 100%;

    @media (min-width: 1300px) {
      margin-top: -10%;
      width: 50%;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    overflow: hidden;
    background: white;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
        0px 6px 10px 0px rgba(0, 0, 0, 0.14),
        0px 1px 18px 0px rgba(0, 0, 0, 0.12);
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
  }

  .tools {
    list-style-position: inside;
    margin: 0 0 8px 0;
  }

  .miniature-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }

  .miniature {
    position: relative;
    width: 100%;
    height: 240px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    transition: transform 0.2s;
    transform-origin: center;
    &:hover {
      transform: scale(1.08);
    }
    @media (min-width: 425px) {
      height: 300px;
    }
  }

  .icon {
    width: 30px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    color: #ffffff;
    cursor: pointer;
    mix-blend-mode: difference;
    opacity: 0.7;
    z-index: 1;
  }

  .description {
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<div class="item-container" class:right={index % 2 != 0}>
  <div class="item-column">
    <div class="item">
      <div class="miniature-wrapper">
        <div
          class="miniature"
          on:click={showDetails}
          style="background-image: url({`images/portfolio/${minSrc}`})" />
        <span class="icon" title={$_(`icon-title.${srcType}`)}>
          {#if (srcType === 'video')}
            <VideoIcon />
          {:else if (srcType === 'gallery')}
            <ImageIcon />
          {:else}
            <MaximizeIcon />
          {/if}
        </span>
      </div>
      <div class="content">
        <p class="tags">
          {#each tags as tag}
            <span>#{tag}{' '}</span>
          {/each}
        </p>
        <h3 class="title">{$_(`${id}.title`)}</h3>
        <p class="tools">
          {$_('main-tools')}:
          {#each tools as tool, i}
            {#if i < 3}
              <li class="tool">{tool}</li>
            {/if}
          {/each}
        </p>
        <p class="description">{$_(`${id}.description`)}</p>
        <a href="#" on:click={showDetails} role="button">{$_('readMore')}</a>
      </div>
    </div>
    <div class="dynks" />
  </div>
</div>
