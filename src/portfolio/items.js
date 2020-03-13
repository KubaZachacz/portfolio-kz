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
  vanilla: "HTML, CSS, JS"
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
        minSrc: "portfolio.png",
        src: "portfolio.png",
        tags: [tags.front, tags.graphic, tags.prv],
        tools: [tools.svelte, tools.illustrator]
      },
      {
        id: "envio",
        url: "https://www.envio.io/industrial-tracking-technology",
        srcType: src.gallery,
        minSrc: "envio1.png",
        src: ["envio1.png", "envio2.png", "envio3.png"],
        tags: [tags.front, tags.akra, tags.pro],
        tools: [tools.react, tools.sotrybook]
      },
      {
        id: "avatar-maker",
        url: "https://123web.pl/avatarmaker/",
        repo: "https://github.com/KubaZachacz/avatarmaker",
        srcType: src.gallery,
        minSrc: "screen1.png",
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
        id: "placeholder",
        srcType: src.img,
        minSrc: "baner-1.jpg",
        src: "baner-1.jpg",
        tags: [tags.prv],
        tools: [tools.svelte]
      },
      {
        id: "dgprawo",
        url: "https://dgprawo.pl/",
        srcType: src.img,
        minSrc: "dgprawo1.png",
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
        minSrc: "genji1.jpg",
        src: ["genji1.jpg", "genji2.jpg", "genji3.jpg"],
        tags: [tags.engineering, tags.prv],
        tools: [tools.inventor, tools.arduino]
      },
      {
        id: "bastion-robot",
        srcType: src.video,
        minSrc: "miniature.png",
        src: "https://www.youtube.com/embed/TWDAUc1G264",
        tags: [tags.engineering, tags.prv],
        tools: [tools.inventor, tools.arduino]
      }
    ]
  }
];
