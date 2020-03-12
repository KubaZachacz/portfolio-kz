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
  arduino: "Arduino"
};

export const portfolioItems = [
  {
    year: 2020,
    items: [
      {
        id: "portfolio-page",
        url: "kuba-zachacz.123web.pl",
        repo: "https://github.com/KubaZachacz/portfolio-kz",
        srcType: src.img,
        minSrc: "portfolio.png",
        src: ["portfolio.png"],
        tags: [tags.front, tags.graphic, tags.prv],
        tools: [tools.svelte, tools.illustrator]
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
        minSrc: "placeholder.jpg",
        src: "placeholder.jpg",
        tags: [tags.prv, tags.engineering],
        tools: [
          tools.inventor,
          tools.arduino,
          tools.illustrator,
          tools.material,
          tools.redux
        ]
      }
    ]
  },
  {
    year: 2019,
    items: [
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
