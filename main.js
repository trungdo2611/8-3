onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.querySelector(".close-btn").onclick = function () {
  document.querySelector(".woman_day_card").classList.add("hidden");
  document.querySelector(".woman_day_card").classList.remove("activeCard");
};

document.querySelector(".cta").onclick = function () {
  this.classList.add("active");
  setTimeout(() => {
    this.classList.remove("active");
  }, 300);
  document.querySelector(".woman_day_card").classList.add("activeCard");
  document.querySelector(".woman_day_card").classList.remove("hidden");
};
