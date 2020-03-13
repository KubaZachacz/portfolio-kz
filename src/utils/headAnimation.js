const SPRITES_ARR = ["kuba-1", "kuba-2", "kuba-3"];
const imgURL = item => `./images/${item}.svg`;

export const setupHeadAnimation = () => {
  const headImage = document.getElementById("face-image");

  const setSprite = spriteIndex =>
    (headImage.src = imgURL(SPRITES_ARR[spriteIndex]));

  return { ...{ setSprite } };
};
