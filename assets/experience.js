(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const progressBar = document.querySelector(".scroll-progress span");

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateProgress = () => {
    if (!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = `${clamp(progress, 0, 100)}%`;
  };

  const bindTilt = () => {
    if (prefersReducedMotion) return;

    document.querySelectorAll(".path-stage, .hero-visual, .dhero-route").forEach((node) => {
      node.addEventListener("pointermove", (event) => {
        const rect = node.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        node.style.setProperty("--tilt-x", `${clamp(y * -3, -4, 4)}deg`);
        node.style.setProperty("--tilt-y", `${clamp(x * 4, -5, 5)}deg`);
        node.style.setProperty("--glow-x", `${clamp((x + 1) * 50, 0, 100)}%`);
        node.style.setProperty("--glow-y", `${clamp((y + 1) * 50, 0, 100)}%`);
      });

      node.addEventListener("pointerleave", () => {
        node.style.removeProperty("--tilt-x");
        node.style.removeProperty("--tilt-y");
        node.style.removeProperty("--glow-x");
        node.style.removeProperty("--glow-y");
      });
    });
  };

  document.body.classList.add("is-ready");
  updateProgress();
  bindTilt();

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
})();
