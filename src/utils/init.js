import ScrollMagic from "scrollmagic";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import anime from 'animejs/lib/anime.es.js';

export default function init() {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.3,
      duration: 500,
      offset: 0.3
    }
  });

  const intro1 = new ScrollMagic.Scene({
    triggerElement: "#intro1"
  })
    .setPin("#intro1")
    .on("enter", function (event) {
      document.querySelector("#intro1").classList.remove("hidden");
      document.getElementById("head-section").classList.add("scaled");
    })
    .on("leave", function (event) {
      document.querySelector("#intro1").classList.add("hidden");
      document.getElementById("head-section").classList.remove("scaled");
    });

  const intro2 = new ScrollMagic.Scene({
    triggerElement: "#intro2"
  })
    .setPin("#intro2")
    .setClassToggle("#intro2", "visible")

    .on("enter", function ({ scrollDirection }) {
      if (scrollDirection === "FORWARD") {
        document.querySelector("#head-1").classList.remove("visible");
      }
    })
    .on("leave", function ({ scrollDirection }) {
      if (scrollDirection === "REVERSE") {
        document.querySelector("#head-1").classList.add("visible");
      }
    });

  const intro3 = new ScrollMagic.Scene({
    triggerElement: "#intro3"
  })
    .setPin("#intro3")
    .setClassToggle("#intro3", "visible");

  const intro4 = new ScrollMagic.Scene({
    triggerElement: "#intro4"
  })
    .setPin("#intro4")
    .setClassToggle("#intro4", "visible")
    .on("enter", function ({ scrollDirection }) {
      if (scrollDirection === "FORWARD") {
        document.querySelector("#head-2").classList.remove("visible");
        document.querySelector("#head-3").classList.add("visible");
      }
    })
    .on("leave", function ({ scrollDirection }) {
      if (scrollDirection === "REVERSE") {
        document.querySelector("#head-2").classList.add("visible");
        document.querySelector("#head-3").classList.remove("visible");
      }
    });


  controller.addScene([intro1, intro2, intro3, intro4]);

  intro1.triggerHook(0.25).addIndicators();
  intro2.addIndicators();
  intro3.addIndicators();
  intro4.addIndicators();
}