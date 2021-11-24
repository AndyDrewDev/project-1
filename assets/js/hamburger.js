function hamburgerToggle() {
  const hamburger = document.getElementById("hamburgerMenu");
  if (hamburger.style.display === "none") {
    hamburger.style.display = "";
  } else {
    hamburger.style.display = "none";
  }
}
