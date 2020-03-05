const src = {
  img: "img",
  video: "video"
};

const tags = {
  prv: "private",
  pro: "professional",
  zrtx: "zortrax",
  akra: "akra",
  graphic: "graphic",
  front: "front-end",
  engineering: "engineering"
};

export const portfolioItems = [
  {
    id: "portfolio-page",
    minSrc: "portfolio.png",
    srcType: src.img,
    src: "portfolio.png",
    tags: [tags.prv, tags.graphic, tags.front]
  },
  {
    id: "bastion-robot",
    srcType: src.video,
    src: "https://www.youtube.com/embed/TWDAUc1G264",
    tags: [tags.prv, tags.engineering]
  }
];
