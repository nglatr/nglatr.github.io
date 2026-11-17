console.log("Skrypt poświaty działa!");

document.addEventListener("DOMContentLoaded", () => {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  // Tworzymy element poświaty w locie
  const glow = document.createElement("div");
  glow.classList.add("cursor-glow");
  document.body.appendChild(glow);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  // Śledzimy pozycję myszy
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Płynna animacja (pętla renderująca) z efektem opóźnienia
  function animate() {
    // 0.1 oznacza płynność (im mniejsza liczba, tym większy "poślizg" poświaty)
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
  }

  animate();
});