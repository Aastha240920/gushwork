window.onload = function () {
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".thumb");
  const carousel = document.getElementById("carousel");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  let scrollAmount = 0;

  thumbs.forEach((img) => {
    img.addEventListener("click", () => {
      mainImage.src = img.src;
    });
  });

  next.addEventListener("click", () => {
    scrollAmount += 100;
    carousel.scrollLeft = scrollAmount;
  });

  prev.addEventListener("click", () => {
    scrollAmount -= 100;
    carousel.scrollLeft = scrollAmount;
  });
};
