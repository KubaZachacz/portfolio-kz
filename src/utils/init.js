import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import anime from "animejs/lib/anime.es.js";

export default function init() {
  const rotate = anime({
    targets: "#shape-wrapper",
    rotate: "1turn",
    duration: 20000,
    delay: 0,
    loop: true,
    // autoplay: false,
    // direction: "alternate",
    easing: "linear"

    // easing: "spring"
  });

  console.log(rotate);

  const stage1 = anime({
    targets: "#base-circle",
    // rotate: { value: "1turn", duration: 10000 },
    scale: 1.1,
    fill: ["#d6e6ff"],
    duration: 800,
    delay: 0,
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "linear"
  });

  // const stage1 = anime.timeline({
  //   targets: "#base-circle",
  //   loop: true,
  //   autoplay: false,
  //   // direction: "alternate",
  //   easing: "linear",
  //   delay: 0
  // });
  // stage1.add({
  //   scale: 1.1,
  //   // rotate: "1turn",
  //   duration: 1000
  // });
  // stage1.add({
  //   scale: 0.9,
  //   rotate: "1turn",
  //   duration: 10000
  // });

  const stage2 = anime.timeline({
    loop: true,
    easing: "easeOutQuad",
    autoplay: false,
    direction: "alternate"
  });
  stage2.add({
    targets: "#base-circle",
    d: [
      {
        value:
          "M429 335C429 381.805 472.783 459.028 444 491.5C410.291 529.53 330.816 483 276 483C224.629 483 147.881 525.448 114.5 491.5C81.8486 458.294 114.5 379.749 114.5 329.5C114.5 276.152 89.7284 213.608 126 180C158.821 149.589 227.727 191.5 276 191.5C326.865 191.5 396.694 146.639 430 180C463.234 213.289 429 284.245 429 335Z",
        duration: 1000
      },
      {
        value:
          "M482.5 336C482.5 382.805 402.283 410.528 373.5 443C339.791 481.03 330.816 535 276 535C224.629 535 196.381 463.948 163 430C130.349 396.794 59.5 386.249 59.5 336C59.5 282.652 136.728 268.608 173 235C205.821 204.589 227.727 117.5 276 117.5C326.865 117.5 340.194 183.139 373.5 216.5C406.734 249.789 482.5 285.245 482.5 336Z",
        duration: 1000
      },
      {
        value:
          "M429 335C429 381.805 472.783 459.028 444 491.5C410.291 529.53 330.816 483 276 483C224.629 483 147.881 525.448 114.5 491.5C81.8486 458.294 114.5 379.749 114.5 329.5C114.5 276.152 89.7284 213.608 126 180C158.821 149.589 227.727 191.5 276 191.5C326.865 191.5 396.694 146.639 430 180C463.234 213.289 429 284.245 429 335Z",
        duration: 1000
      }
    ]
  });

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
    .on("enter", function(event) {
      document.querySelector("#intro1").classList.remove("hidden");
      document.getElementById("head-section").classList.add("scaled");
      stage1.pause();
      stage1.seek(0);
    })
    .on("leave", function(event) {
      document.querySelector("#intro1").classList.add("hidden");
      document.getElementById("head-section").classList.remove("scaled");
      stage1.play();
    });

  const intro2 = new ScrollMagic.Scene({
    triggerElement: "#intro2"
  })
    .setPin("#intro2")
    .setClassToggle("#intro2", "visible")

    .on("enter", function({ scrollDirection }) {
      if (scrollDirection === "FORWARD") {
        document.querySelector("#head-1").classList.remove("visible");
      }
    })
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === "REVERSE") {
        document.querySelector("#head-1").classList.add("visible");
      }
      if (scrollDirection === "FORWARD") {
        stage2.play();
        // stage1.pause();
        // stage1.seek(0);
      }
    });

  const intro3 = new ScrollMagic.Scene({
    triggerElement: "#intro3"
  })
    .setPin("#intro3")
    .setClassToggle("#intro3", "visible")
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === "REVERSE") {
        stage2.pause();
        stage2.seek(0);
      }
    })
    .on("enter", function({ scrollDirection }) {
      if (scrollDirection === "FORWARD") {
      }
    });

  const intro4 = new ScrollMagic.Scene({
    triggerElement: "#intro4"
  })
    .setPin("#intro4")
    .setClassToggle("#intro4", "visible")
    .on("enter", function({ scrollDirection }) {
      if (scrollDirection === "FORWARD") {
        document.querySelector("#head-2").classList.remove("visible");
        document.querySelector("#head-3").classList.add("visible");
      }
      if (scrollDirection === "REVERSE") {
        document.getElementById("head-section").classList.remove("down");
      }
    })
    .on("leave", function({ scrollDirection }) {
      if (scrollDirection === "REVERSE") {
        document.querySelector("#head-2").classList.add("visible");
        document.querySelector("#head-3").classList.remove("visible");
      }
      if (scrollDirection === "FORWARD") {
        document.getElementById("head-section").classList.add("down");
      }
    });

  controller.addScene([intro1, intro2, intro3, intro4]);

  intro1.triggerHook(0.25).addIndicators();
  intro2.addIndicators();
  intro3.addIndicators();
  intro4.addIndicators();
}
