<style lang="scss">
  $color: #000000;

  .icon-scroll {
    position: relative;
    margin: 8px auto;
    transform: scale(0.8);
  }
  .icon-scroll:before {
    position: absolute;
    left: 50%;
  }

  .icon-scroll {
    width: 40px;
    height: 70px;
    top: 50%;
    // box-shadow: inset 0 0 0 1px $color;
    box-shadow: 0 0 4px 1px #00000070, 0 0 1px 1px #000000;
    border-radius: 25px;
  }

  .icon-scroll:before {
    content: "";
    width: 8px;
    height: 8px;
    background: $color;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(46px);
      transform: translateY(46px);
    }
  }
</style>

<div class="icon-scroll" />
