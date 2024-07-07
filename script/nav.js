const mobileLinks = document.getElementById("mb-link");

const open = document.getElementById("open");

open.onclick = () => {
  console.log(22);
  mobileLinks.style.transform = "translateX(0)";
  open.style.display = "none";
  close.style.display = "block";
};
const close = document.getElementById("close");

close.onclick = () => {
  mobileLinks.style.transform = "translateX(120px)";
  open.style.display = "block";
  close.style.display = "none";
};
