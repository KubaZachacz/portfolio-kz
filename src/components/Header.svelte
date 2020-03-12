<script>
  import { onMount } from "svelte";
  import ScrollMagic from "scrollmagic";
  import { controller } from "../stores.js";
  import { _ } from "svelte-i18n";
  import {
    getLanguage,
    setLanguage,
    setLanguageOption
  } from "../utils/languageHandlers";
  import { setupLocale } from "../locale/setup";

  onMount(() => {
    setLanguageOption(getLanguage());
  });

  const handleHange = event => {
    const lang = event.target.value;
    setLanguage(lang);
    setupLocale(lang);
  };
</script>

<style lang="scss">
  header {
    color: var(--primary);
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%
    );
    z-index: 30;
  }
  h2,
  h1 {
    font-weight: 100;
    transition: all 1s;
    width: fit-content;
    position: relative;
    left: 50%;
    transform: translate(-50%, 2vh);
  }
  h1 {
    font-size: 7vh;
    margin: 1vh 0;
  }

  h2 {
    font-size: 5vh;
    margin: 0 0;
  }

  :global(.navbar) {
    padding-bottom: 30px;
    h1,
    h2 {
      left: 0;
      transform: translate(0, 0);
      margin-left: 24px;
    }
    @media (min-height: 425px) {
      h1 {
        font-size: 32px;
        margin-top: 12px;
        margin-bottom: 4px;
      }
      h2 {
        font-size: 20px;
      }
    }
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  nav {
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    margin: 16px;
    display: flex;
    justify-content: flex-end;
    a,
    select {
      margin: 0 4px;
    }
    img {
      width: 32px;
    }
  }

  #lang-select {
    background-color: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='255px' height='255px' viewBox='0 0 255 255' style='enable-background:new 0 0 255 255;' xml:space='preserve'> <g id='arrow-drop-down'> <polygon points='0,63.75 127.5,191.25 255,63.75'/></g></svg>");
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: auto 30%;
    border: none;
    padding: 0 26px 0 6px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &::-ms-expand {
      display: none;
    }
  }

  @media (orientation: portrait) and (max-width: 768px) {
    h1 {
      font-size: 40px;
      margin: 8px 0 16px;
    }
    h2 {
      font-size: 32px;
    }
    h2,
    h1 {
      transform: translate(-50%, 48px);
    }
    :global(.navbar) {
      h1 {
        font-size: 30px;
        margin: 8px 12px 8px;
      }
      h2 {
        font-size: 18px;
        margin: 0 12px;
      }
    }
    nav {
      margin: 16px 0 0;
      a,
      select {
        margin: 0 8px;
      }
      img {
        width: 28px;
      }
    }
  }
  @media (orientation: portrait) and (max-width: 425px) {
    h1 {
      font-size: 36px;
      margin: 2px 0 6px;
    }
    h2 {
      font-size: 28px;
    }
    :global(.navbar) {
      h1 {
        font-size: 24px;
      }
      h2 {
        font-size: 16px;
      }
    }
    nav {
      a,
      select {
        margin: 0 6px;
      }
      img {
        width: 24px;
      }
    }
  }
</style>

<header id="page-header">
  <nav>
    <a
      href="https://github.com/KubaZachacz"
      title="github.com/KubaZachacz"
      aria-label="github.com/KubaZachacz"
      tabindex="0">
      <img src="images/icons/github.svg" alt="github icon" />
    </a>
    <a
      href="mailto:zachacz.jakub@gmail.com"
      title="zachacz.jakub@gmail.com"
      aria-label="zachacz.jakub@gmail.com">
      <img src="images/icons/email.svg" alt="email icon" />
    </a>
    <select
      name="lang"
      aria-label="select language"
      id="lang-select"
      on:change={handleHange}>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  </nav>
  <h1>Kuba Zachacz</h1>
  <h2>Frontend Developer</h2>
</header>
