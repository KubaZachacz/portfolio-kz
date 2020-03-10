<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  export let title;
  export let description;
</script>

<div class="details-modal">
  <h3>{title}</h3>
  <iframe
    title="video"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen />
  <p>{description}</p>
</div>
