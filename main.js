const button = document.querySelector(".button");
const input = document.querySelector(".input");

function decorator(func, time) {
  let timeId;

  return function() {
    clearTimeout(timeId);
    timeId = setTimeout(() => func.apply(this, arguments), time);
  };
}

let wrapper = decorator(updateText, 2000);

input.addEventListener('input', wrapper);

function updateText({target}) {
  button.textContent = target.value;

}