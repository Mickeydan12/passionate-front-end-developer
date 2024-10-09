const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlist.classList.toggle("active");
});

const typed = new Typed(".multiple", {
  strings: ["Front-end developer", "Youtuber", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
