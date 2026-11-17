// Entrance animations: elements with data-anim play once when scrolled into view.
(function () {
  var els = document.querySelectorAll("[data-anim]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("anim-done"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      setTimeout(function () {
        el.classList.add("anim-in", el.dataset.anim);
      }, parseInt(el.dataset.delay || "0", 10));
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  els.forEach(function (el) { io.observe(el); });
})();
