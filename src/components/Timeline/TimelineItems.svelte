<script>
  import Item from "../Item/Item.svelte";
  import { portfolioItems } from "../../portfolio/items";
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
  #timeline-wrapper {
    position: relative;
    z-index: 20;
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

<div id="timeline-wrapper">
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
