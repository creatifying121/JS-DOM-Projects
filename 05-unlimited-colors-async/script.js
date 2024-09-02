// logic to generate random colors
const randomColor = function () {
  const hex = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  // console.log(color);
  return color;
};

const body = document.querySelector("body");

let backgroundColor;

document.querySelector("#start").addEventListener("click", function () {
  backgroundColor = setInterval(() => {
    body.style.backgroundColor = randomColor();
  }, 1000);
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(backgroundColor);
  backgroundColor = null;
  console.log("now bg color will not change");
});
