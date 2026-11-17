# Jan Kowalski

Junior Penetration Tester / Security Researcher.  
Buduję narzędzia w Pythonie, analizuję podatności webowe i dokumentuję swoją naukę.

---

### Obecnie (Now)
* Przygotowuję się do certyfikacji **OSCP**.
* Rozwiązuję maszyny z kategorii Active Directory na HackTheBox.

### Kontakt & Klucze
* **GitHub:** [github.com/twoj-nick](https://github.com)
* **LinkedIn:** [linkedin.com/in/twoj-nick](https://linkedin.com)
* **PGP Fingerprint:** `4F92 8A1C ...`




<script>
document.addEventListener("DOMContentLoaded", () => {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const glow = document.createElement("div");
  glow.classList.add("cursor-glow");
  document.body.appendChild(glow);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
  }

  animate();
});
</script>