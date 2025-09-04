window.addEventListener("scroll", function() {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

let lastScroll = 0;
window.addEventListener("scroll", function() {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll + 400) { // show kiss after scrolling further
    const kiss = document.getElementById("kissEffect");
    kiss.style.display = "block";
    setTimeout(() => {
      kiss.style.display = "none";
    }, 1500);
    lastScroll = currentScroll;
  }
});
