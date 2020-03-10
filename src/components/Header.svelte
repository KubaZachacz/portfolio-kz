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
    z-index: 10;
  }
  h2,
  h1 {
    font-weight: 100;
    transition: all 1s;
    width: fit-content;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  h1 {
    font-size: 56px;
    margin: 16px 0;
  }

  h2 {
    font-size: 48px;
    margin: 0 0;
  }

  :global(.navbar) {
    padding-bottom: 30px;
    h1,
    h2 {
      left: 0;
      transform: translateX(0);
    }
    h1 {
      font-size: 32px;
      margin: 12px 24px 4px 24px;
    }
    h2 {
      font-size: 20px;
      margin-left: 24px;
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
    background: none;
    border: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
      margin: 8px 0 16px;
    }
    h2 {
      font-size: 32px;
    }
    :global(.navbar) {
      h1 {
        font-size: 30px;
        margin: 0 12px 8px;
      }
      h2 {
        font-size: 18px;
        margin: 0 12px;
      }
    }
    nav {
      position: static;
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
  @media (max-width: 375px) {
    h1 {
      font-size: 36px;
      margin: 8px 0 12px;
    }
    h2 {
      font-size: 28px;
    }
  }
</style>

<header id="page-header">
  <nav class="mobile">
    <a href="https://github.com/KubaZachacz" title="github.com/KubaZachacz">
      <img src="images/icons/github.svg" alt="github icon" />
    </a>
    <a href="mailto:zachacz.jakub@gmail.com" title="zachacz.jakub@gmail.com">
      <img src="images/icons/email.svg" alt="email icon" />
    </a>
    <select name="lang" id="lang-select" on:change={handleHange}>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  </nav>
  <h1>Kuba Zachacz</h1>
  <h2>Frontend Developer</h2>
</header>
