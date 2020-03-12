<style lang="scss">
  $color: #000000;
  $iconWidth: 24px;
  $iconHeight: 1.75 * $iconWidth;

  .icon-scroll {
    position: relative;
    margin: 4px auto;

    @media (max-height: 600px) {
      transform: scale(0.8);
    }
  }
  .icon-scroll:before {
    position: absolute;
    left: 50%;
  }

  .icon-scroll {
    width: $iconWidth;
    height: $iconHeight;
    top: 50%;
    box-shadow: inset 0 0 0 1px $color, 0 0 4px 1px rgba($color, 0.2);
    border-radius: calc(0.5 * #{$iconWidth});
  }

  .icon-scroll:before {
    content: "";
    width: 6px;
    height: 6px;
    background: $color;
    margin-left: -3px;
    top: 8px;
    border-radius: 50%;
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
      -webkit-transform: translateY(calc(#{$iconHeight} - 24px));
      transform: translateY(calc(#{$iconHeight} - 24px));
    }
  }
</style>

<div class="icon-scroll" />
