<script>
  import Card from "./Card.svelte";

  export let index;
  export let item;


</script>

<style lang="scss">
  .item-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
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

</style>

<div class="item-container" class:right={index % 2 != 0}>
  <div class="item-column">
    <Card {...item}/>
    <div class="dynks" />
  </div>
</div>
