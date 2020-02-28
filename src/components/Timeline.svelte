<script>

</script>

<style>
  .timeline-lines {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    transition: all 1.5s;
    z-index: -20;
  }
  :global(.unrevealed) {
    transform: translateY(100%);
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
  .item {
    position: relative;
    padding: 100px 0;
    text-align: center;
    z-index: -15;
  }
</style>

<div id="timeline-lines" class="timeline-lines unrevealed">
  <div class="line technology" />
  <div class="line creativity" />
</div>
<div class="item">
  <p>PIERWSZY ELEMENT</p>
</div>
<div class="item">
  <p>DRUGI ELEMENT</p>
</div>
<div class="item">
  <p>CZECI ELEMENT</p>
</div>
