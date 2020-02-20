<script>
  import { onMount } from "svelte";

  onMount(() => {
    // var tl = new TimelineLite();
    // tl.from("path", 1, { drawSVG: 0, stagger: 1 });

    anime({
      targets: "path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 100,
      delay: function(el, i) {
        return i * 250;
      },
      direction: "normal",
      loop: true,
      complete: function(anim) {
        alert("dupa");
      }
    });
  });
</script>

<style lang="scss">
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  path {
    /* filter: url(#glow); */
    fill-opacity: 0;
    /* stroke-width: 5px; */
  }
</style>

<svg
  id="lines-1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 396.97579 555.41548">
  <defs>
    <style>
      .\33 038cf92-da13-423f-8a97-fe1c1ce476f7,
      .b6897d7a-8e6d-4d38-b271-bce730623cbb,
      .e829a148-a7d7-4aec-b3c5-e3c08fe2b588 {
        fill: none;
      }
      .b6897d7a-8e6d-4d38-b271-bce730623cbb {
        stroke: #ec008c;
      }
      .\33 038cf92-da13-423f-8a97-fe1c1ce476f7,
      .b6897d7a-8e6d-4d38-b271-bce730623cbb {
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }
      .\33 038cf92-da13-423f-8a97-fe1c1ce476f7 {
        stroke: #8dc63f;
      }
    </style>
    <filter
      id="glow"
      filterUnits="userSpaceOnUse"
      x="-50%"
      y="-50%"
      width="200%"
      height="200%">
      <!-- blur the text at different levels-->
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur5" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur10" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur20" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur50" />
      <!-- merge all the blurs except for the first one -->
      <feMerge result="blur-merged">
        <feMergeNode in="blur10" />
        <feMergeNode in="blur20" />
        <feMergeNode in="blur30" />
        <feMergeNode in="blur50" />
      </feMerge>
      <!-- recolour the merged blurs red-->
      <feColorMatrix
        result="red-blur"
        in="blur-merged"
        type="matrix"
        values="1 0 0 0 0 0 0.06 0 0 0 0 0 0.44 0 0 0 0 0 1 0" />
      <feMerge>
        <feMergeNode in="red-blur" />
        <!-- largest blurs coloured red -->
        <feMergeNode in="blur5" />
        <!-- smallest blur left white -->
        <feMergeNode in="SourceGraphic" />
        <!-- original white text -->
      </feMerge>
    </filter>
  </defs>
  <title>lines-1</title>
  <g id="11febe32-7d87-44f4-9c14-dce4989feaf4" data-name="Warstwa 2">
    <g id="22da34e5-785e-4423-abb6-d30ecd9728f9" data-name="ramka">
      <rect
        class="e829a148-a7d7-4aec-b3c5-e3c08fe2b588"
        width="396.97579"
        height="555.41548" />
    </g>
    <g id="54cf2c3a-ec3f-4fc7-9c32-a08eb060847d" data-name="Warstwa 36">
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M191.34859,123.294S231.9,126.5581,244.9,126.4331s34.375,14.125,35.125,14.875a61.94606,61.94606,0,0,1,26.98294,25.00743" />
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M48.775,243.6206c-1.93751-8.9375-5.84375-23.875-6.4746-22.86019S42.9,236.1206,38.868,230.1206s-1.63511-25.48811-1.63511-25.48811,2.08574-32.08581,16.4051-44.31018" />
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M80.96789,131.6206s-.05948-11.46943,2.09256-12.10972S84.65,132.4331,86.525,128.4956s17-31.4375,54-49.1875c0,0,.54167,2.125-2,4.08333s14.40867-13.89436,42.70433-21.55135" />
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M102.775,134.34482s16.78849-31.91172,62.89425-49.91172" />
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M56.72909,209.9331a55.8297,55.8297,0,0,1,17.034-36.83333" />
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M250.525,111.76643s3.35818-8.86928,26.67909-10.10131,56.32091,13.268,58.98758,19.768,3.50518-10.75668-10.39867-21.459S314.025,78.6206,289.275,75.3706c0,0,12.55555-.59924,17.15277,1.98163s-3.10553-8.51573-14.2854-11.52993" />
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M94.9,214.4331s15.43987-23.85478,20.03243-25.20864,13.90505-.36576,19.46757-2.67231,55.32429-16.21506,92.59965,8.45794" />
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M232.775,233.897s4.16667-17.13059,2.75-22.38059c0,0,15.5559-4.81185,23.44462,1.05241,0,0-3.21048,16.95654,3.47205,30.90222s24.06181,41.378,59.48924,39.33666" />
      <path
        style="filter: url(#glow);"
        class="b6897d7a-8e6d-4d38-b271-bce730623cbb"
        d="M295.85832,53.34679c1.5-.247,25.7383,2.41238,32.45248,18.33268,0,0-8.33333,3.75363-16.22624,2.00363a53.28079,53.28079,0,0,1,37.46069,32.23632" />
      <path
        style="filter: url(#glow);"
        class="3038cf92-da13-423f-8a97-fe1c1ce476f7"
        d="M301.87031,195.27373c13.59532-1.40936,28.57135,3.9927,34.90468,5.53261s15.83333,7.46008,24.75,8.30329,3.37666,12.636,3.37666,12.636-6.18918-.25-5.62666,6.38032-1.79167,17.72385-1.79167,17.72385S350.99464,273.2,336.67648,278.98322" />
      <path
        style="filter: url(#glow);"
        class="3038cf92-da13-423f-8a97-fe1c1ce476f7"
        d="M220.23634,191.98176s8.45843,5.341,9.37354,7.02116c0,0,7.04011-4.88231,20.97759-2.19481s11.73423,6.79591,18.39837,4.30421,10.12248-5.582,19.12248-5.04728" />
      <path
        style="filter: url(#glow);"
        class="3038cf92-da13-423f-8a97-fe1c1ce476f7"
        d="M108.025,209.54057s6.46151-9.67048,9.56409-8.43065,4.56673,5.1592,4.043,10.57452-1.6806,53.90751,37.9395,65.41141" />
      <path
        style="filter: url(#glow);"
        class="3038cf92-da13-423f-8a97-fe1c1ce476f7"
        d="M83.22318,231.547S102.542,191.07491,99.721,177.004c0,0,10.054-4.6862,19.304-21.31605s42.16325-34.38749,86.27306-31.25937" />
      <path
        style="filter: url(#glow);"
        class="3038cf92-da13-423f-8a97-fe1c1ce476f7"
        d="M326.91733,187.35676s3.10766-62.257-9.89234-76.42366c0,0,15.00357,2.38853,20.16845,12.36093" />
      <path
        style="filter: url(#glow);"
        class="3038cf92-da13-423f-8a97-fe1c1ce476f7"
        d="M307.00793,75.82189S282.70981,43.74556,212.6174,57.83933c0,0,1.01289-3.73757,6.46024-4.48857,0,0-28.886-3.14007-69.386,22.47113" />
      <path
        style="filter: url(#glow);"
        class="3038cf92-da13-423f-8a97-fe1c1ce476f7"
        d="M74.12658,144.0581s-1.312-8.625-22.76931-4.625c0,0,9.54272-10.25,20.66772-7.8125" />
      <polyline
        class="3038cf92-da13-423f-8a97-fe1c1ce476f7"
        points="30.356 219.855 33.192 247.833 40.192 239.081 41.025 267.933
        48.358 262.266 41.858 293.538" />
    </g>
  </g>
</svg>
