var isIE =
  !!navigator.userAgent.match(/Trident/g) ||
  !!navigator.userAgent.match(/MSIE/g);

if (isIE) {
  // alert("Your Browser is not supported");
  var warning = document.createElement("div");
  warning.setAttribute("class", "IE-warning");
  var warningEN = document.createElement("h1");
  var warningPL = document.createElement("h1");
  var video = document.createElement("div");

  warningEN.innerHTML = "&#x26a0; Your Browser is not supported &#x26a0;";
  warningPL.innerHTML =
    "&#x26a0; Twoja przeglądarka nie jest wspierana &#x26a0;";

  video.innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/l60MnDJklnM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  warning.appendChild(warningEN);
  warning.appendChild(video);
  warning.appendChild(warningPL);

  document.body.appendChild(warning);
}
