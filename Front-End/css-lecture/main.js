const btn = document.querySelector(".map-container__btn");
console.log(btn);
const cnt = document.querySelector(".map-container");
const act = document.querySelector(".map__sidebar");

btn.addEventListener("click", function () {
  console.log("asd");
  cnt.classList.toggle("hide");
  act.classList.toggle("hide");
  console.log(act);
});
