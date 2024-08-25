const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  // console.log(result);

  if (height < 0 || height === "" || isNaN(height)) {
    result.innerHTML = "please give a valid height";
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    result.innerHTML = "please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}</span><br/>You're underweight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>${bmi}</span><br/>You're normal`;
    } else if (bmi >= 24.9) {
      result.innerHTML = `<span>${bmi}</span><br/>You're overweight`;
    }
  }
});
