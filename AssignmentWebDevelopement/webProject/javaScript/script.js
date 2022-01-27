const slideUpMenu = document.getElementById("closeMenu");

slideUpMenu.addEventListener("click", () => {
  const upperMenu = document.getElementById("lowerBar");
  if (upperMenu.style.display === "none") {
    upperMenu.style.display = "block";
  } else {
    upperMenu.style.display = "none";
  }
});
