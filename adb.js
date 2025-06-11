// function called if wwads is blocked
function ABDetected() {
  const wwads = document.getElementsByClassName("wwads");
  if (wwads.length === 0) return;
  if (!wwads[0].classList.contains("wwads-cn")) return;
  wwads[0].classList.remove("wwads-cn");
}

//check document ready
function docReady(t) {
  "complete" === document.readyState || "interactive" === document.readyState
    ? setTimeout(t, 1)
    : document.addEventListener("DOMContentLoaded", t);
}

//check if wwads' fire function was blocked after document is ready with 3s timeout (waiting the ad loading)
docReady(function () {
  setInterval(function () {
    if (window._AdBlockInit === undefined) {
      ABDetected();
    }
  }, 2000);
});
