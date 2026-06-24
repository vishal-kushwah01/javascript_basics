let input = document.querySelector("input");

input.addEventListener("keydown", function (e) {
  console.log("key = ", e.code); //arrowup , arrowdown , arrowleft , arrowright
  if (e.code == "ArrowUp" || e.code == "keyW") {
    console.log("character move forward");
  } else if (e.code == "ArrowDown" || e.code == "keyS") {
    console.log("character move backword");
  } else if (e.code == "ArrowLeft" || e.code == "keyA") {
    console.log("character move left");
  } else if (e.code == "ArrowRight" || e.code == "keyD") {
    console.log("character move right");
  } else {
    console.log("wrong");
  }
});

// input.addEventListener("keyup", function () {
//   console.log("key was reseled");
// });

