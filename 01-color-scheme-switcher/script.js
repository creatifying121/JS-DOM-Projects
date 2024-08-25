// #c5c9c7
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "grey") {
      body.style.backgroundImage =
        "linear-gradient(to bottom right, black, grey)";
      h2.style.color = "#c5c9c7";
      h1.style.color = "#c5c9c7";
    }

    if (event.target.id === "cornflowerblue") {
      body.style.backgroundImage =
        "linear-gradient(to bottom right, black, cornflowerblue)";
      h2.style.color = "#c5c9c7";
      h1.style.color = "#c5c9c7";
    }

    if (event.target.id === "indigo") {
      body.style.backgroundImage =
        "linear-gradient(to bottom right, black, indigo)";
      h2.style.color = "#c5c9c7";
      h1.style.color = "#c5c9c7";
    }

    if (event.target.id === "turquoise") {
      body.style.backgroundImage =
        "linear-gradient(to bottom right, black, turquoise)";
      h2.style.color = "#c5c9c7";
      h1.style.color = "#c5c9c7";
    }
  });
});
