let menu = document.querySelector("#menu-icon"); // Corrected the ID selector
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "50px",
  duration: 2550,
  reset: true,
});

sr.reveal(".home-text span", { delay: 300 });
sr.reveal(".home-text h1", { delay: 400, origin: "left" });
sr.reveal(".home-text p", { delay: 510, origin: "right" });
sr.reveal(".icon", { delay: 620, origin: "top" });
sr.reveal(".main-btn", { delay: 720, origin: "bottom" });
sr.reveal(".home-img", { delay: 810, origin: "right" });
