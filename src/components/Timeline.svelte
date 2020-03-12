<script>
  import Item from "./Item/Item.svelte";
  import { portfolioItems } from "../portfolio/items";
  let counter = 0;
  const renderItems = [];
  for (let { year, items } of portfolioItems) {
    renderItems.push(year);
    for (let item of items) {
      renderItems.push({ ...item, index: counter });
      counter++;
    }
  }
</script>

<style lang="scss">
  .timeline-lines {
    position: fixed;
    top: 0;
    left: 50%;
    height: 100vh;
    transform: translate(-50%, 0%);
    display: flex;
    transition: all 1.5s;
    z-index: -20;
  }

  :global(.unrevealed) {
    transform: translate(-50%, 100%) !important;
    opacity: 0.25;
  }

  .line {
    width: 4px;
    height: 100%;
    margin: 0 2px;
  }

  .technology {
    background: rgb(45, 67, 128);
    background: linear-gradient(
      0deg,
      rgba(45, 67, 128, 1) 0%,
      rgba(89, 133, 255, 1) 50%,
      rgba(166, 190, 255, 1) 100%
    );
  }

  .creativity {
    background: rgb(128, 10, 49);
    background: linear-gradient(
      0deg,
      rgba(128, 10, 49, 1) 0%,
      rgba(255, 20, 99, 1) 50%,
      rgba(255, 97, 150, 1) 100%
    );
  }

  .year-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 48px;

    .year {
      background: white;
      padding: 4px 16px;
      font-weight: 600;
      font-size: 1.4rem;
      border-bottom: 2px solid #537df0;
      border-top: 2px solid #f71360;
    }
  }
</style>

<div class="timeline-wrapper">
  <div id="timeline-lines" class="timeline-lines unrevealed">
    <div class="line technology" />
    <div class="line creativity" />
  </div>
  <div />
  <div id="timeline" style="height: 200px" />
  {#each renderItems as item}
    {#if typeof item === 'number'}
      <div class="year-wrapper">
        <div class="year">&#8226;{item}&#8226;</div>
      </div>
    {:else}
      <Item {...{ item }} />
    {/if}
  {/each}
</div>
