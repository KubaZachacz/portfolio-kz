<script>
  import { _ } from "svelte-i18n";
  import { getContext } from "svelte";
  import DetailsModal from "./DetailsModal.svelte";
  import {
    MaximizeIcon,
    ImageIcon,
    VideoIcon,
    GithubIcon,
    ExternalLinkIcon
  } from "svelte-feather-icons";

  export let id;
  export let srcType;
  export let src;
  export let minSrc;
  export let url = "";
  export let repo = "";
  export let tags;
  export let tools;

  const description = $_(`${id}.description`);
  const title = $_(`${id}.title`);

  const { open } = getContext("details-modal");
  const showDetails = event => {
    event.preventDefault();
    open(DetailsModal, { title, src });
  };
</script>

<style lang="scss">
  .card {
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

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    h3 {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.334;
      letter-spacing: 0em;
      margin: 0;
    }

    .link {
      text-decoration: underline;
    }

    :global(svg) {
      width: 30px;
    }
    .repo-link {
      display: block;
    }
  }

  .page-link {
    margin: 0 0 8px 0;

    a {
      display: inline-block;
      padding-bottom: 4px;
    }
  }

  h4 {
    font-weight: 500;
  }

  p {
    margin: 0;
    margin-bottom: 4px;
  }

  .tags {
    margin: 0 0 4px 0;
    font-size: 0.9rem;
  }

  .tools {
    list-style-position: inside;
    margin: 0 0 8px 0;
    padding: 0;
  }

  .miniature-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    &:hover .miniature{
      transform: scale(1.05);
    }
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

    @media (min-width: 425px) {
      height: 300px;
    }
  }

  .icon {
    width: 30px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    color: #ffffff;
    cursor: pointer;
    mix-blend-mode: difference;
    opacity: 0.5;
    z-index: 1;
    background-color: transparent;
    border: none;
    padding: 0;
  }

  .description {
    font-style: italic;
  }
</style>

<div class="card">
  <div class="miniature-wrapper">
    <div
      class="miniature"
      on:click={showDetails}
      style="background-image: url({`images/portfolio/${minSrc}`})" />
    <button
      class="icon"
      on:click={showDetails}
      aria-label={$_(`icon-title.${srcType}`)}
      title={$_(`icon-title.${srcType}`)}>
      {#if srcType === 'video'}
        <VideoIcon />
      {:else if srcType === 'gallery'}
        <ImageIcon />
      {:else}
        <MaximizeIcon />
      {/if}
    </button>
  </div>
  <div class="content">
    <p class="tags">
      {#each tags as tag}
        <span>#{tag}{' '}</span>
      {/each}
    </p>
    <div class="title">
      {#if url}
        <a class="link" href={url} title={url}>
          <h3>{$_(`${id}.title`)}</h3>
        </a>
      {:else}
        <h3>{$_(`${id}.title`)}</h3>
      {/if}
      {#if repo}
        <a class="repo-link" href={repo} title={repo} aria-label={repo}>
          <GithubIcon />
        </a>
      {/if}
    </div>
    {$_('tools')}:
    <ul class="tools">
      {#each tools as tool}
        <li class="tool">{tool}</li>
      {/each}
    </ul>
    <p class="description">{$_(`${id}.description`)}</p>
  </div>
</div>
