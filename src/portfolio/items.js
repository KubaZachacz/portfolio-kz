const src = {
  img: "img",
  video: "video",
  gallery: "gallery"
};

const tags = {
  prv: "personal",
  pro: "professional",
  zrtx: "zortrax",
  akra: "akra",
  web: "123web",
  graphic: "graphic",
  front: "front-end",
  engineering: "engineering"
};

const tools = {
  react: "React",
  material: "Material UI",
  svelte: "Svelte",
  redux: "Redux",
  inventor: "Autodesk Inventor",
  illustrator: "Adobre Illustrator",
  arduino: "Arduino",
  sotrybook: "Storybook",
  unity: "Unity",
  vanilla: "HTML, CSS, JS",
  wp: "WordPress"
};

export const portfolioItems = [
  {
    year: 2020,
    items: [
      {
        id: "portfolio-page",
        url: "#",
        repo: "https://github.com/KubaZachacz/portfolio-kz",
        srcType: src.img,
        minSrc: "portfolio-min.jpg",
        src: "portfolio.png",
        tags: [tags.front, tags.graphic, tags.prv],
        tools: [tools.svelte, tools.illustrator]
      },
      {
        id: "envio",
        url: "https://www.envio.io/industrial-tracking-technology",
        srcType: src.gallery,
        minSrc: "envio-min.jpg",
        src: ["envio1.png", "envio2.png", "envio3.png"],
        tags: [tags.front, tags.akra, tags.pro],
        tools: [tools.react, tools.sotrybook]
      },
      {
        id: "avatar-maker",
        url: "https://123web.pl/avatarmaker/",
        repo: "https://github.com/KubaZachacz/avatarmaker",
        srcType: src.gallery,
        minSrc: "avatar-min.jpg",
        src: ["screen1.png", "render.png"],
        tags: [tags.front, tags.graphic, tags.prv],
        tools: [tools.react, tools.redux, tools.material, tools.illustrator]
      }
    ]
  },
  {
    year: 2019,
    items: [
      {
        id: "piotr-wp",
        url: "https://123web.pl/piotrdemo/",
        srcType: src.gallery,
        minSrc: "piotr-min.jpg",
        src: ["piotr1.png", "piotr2.png"],
        tags: [tags.front, tags.web, tags.pro],
        tools: [tools.wp]
      },
      {
        id: "panel-demo",
        url: "https://123web.pl/PanelDemo/",
        repo: "https://github.com/KubaZachacz/PanelDemo",
        srcType: src.gallery,
        minSrc: "panel-min.jpg",
        src: ["panel1.png", "panel2.png"],
        tags: [tags.front, tags.web, tags.prv],
        tools: [tools.react, tools.redux, tools.material]
      },
      // {
      //   id: "placeholder",
      //   srcType: src.img,
      //   minSrc: "baner-1.jpg",
      //   src: "baner-1.jpg",
      //   tags: [tags.prv],
      //   tools: [tools.svelte]
      // },
      {
        id: "quick-green",
        url: "https://kubazachacz.github.io/GQ",
        repo: "https://github.com/KubaZachacz/GQ",
        srcType: src.gallery,
        minSrc: "qg-min.jpg",
        src: "qg1.png",
        tags: [tags.front, tags.prv],
        tools: [tools.react]
      },
      {
        id: "memory-game",
        url: "https://kubazachacz.github.io/MemoryGame",
        repo: "https://github.com/KubaZachacz/MemoryGame",
        srcType: src.img,
        minSrc: "memory-min.jpg",
        src: "memory1.png",
        tags: [tags.front, tags.prv],
        tools: [tools.react]
      },
      {
        id: "dgprawo",
        url: "https://dgprawo.pl/",
        srcType: src.img,
        minSrc: "dgprawo-min.jpg",
        src: "dgprawo1.png",
        tags: [tags.front, tags.pro],
        tools: [tools.vanilla]
      }
    ]
  },
  {
    year: 2018,
    items: [
      {
        id: "genji",
        srcType: src.gallery,
        minSrc: "genji-min.jpg",
        src: ["genji1.jpg", "genji2.jpg", "genji3.jpg"],
        tags: [tags.engineering, tags.prv],
        tools: [tools.inventor, tools.arduino]
      },
      {
        id: "bastion-robot",
        srcType: src.video,
        minSrc: "bastion-min.jpg",
        src: "https://www.youtube.com/embed/TWDAUc1G264",
        tags: [tags.engineering, tags.prv],
        tools: [tools.inventor, tools.arduino]
      }
    ]
  }
];
