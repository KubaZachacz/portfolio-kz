const src = {
  img: "img",
  video: "video"
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
        srcType: src.img,
        minSrc: "portfolio.png",
        // minSrc: "placeholder.jpg",
        src: "portfolio.png",
        tags: [tags.prv, tags.graphic, tags.front],
        tools: [tools.svelte, tools.illustrator]
      },
      {
        id: "bastion-robot",
        srcType: src.video,
        minSrc: "placeholder.jpg",
        src: "https://www.youtube.com/embed/TWDAUc1G264",
        tags: [tags.prv, tags.engineering],
        tools: [tools.inventor, tools.arduino]
      },
      {
        id: "placeholder",
        srcType: src.img,
        minSrc: "placeholder.jpg",
        src: "placeholder.jpg",
        tags: [tags.prv, tags.engineering],
        tools: [tools.inventor, tools.arduino]
      },
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
        tools: [tools.inventor, tools.arduino, tools.illustrator, tools.material, tools.redux]
      },
      {
        id: "placeholder",
        srcType: src.img,
        minSrc: "placeholder.jpg",
        src: "placeholder.jpg",
        tags: [tags.prv, tags.engineering],
        tools: [tools.inventor, tools.arduino]
      }
    ]
  }
];
