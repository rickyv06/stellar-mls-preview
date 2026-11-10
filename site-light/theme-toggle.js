(function () {
  var KEY = "srg-theme";
  var root = document.documentElement;

  function locked() {
    return root.getAttribute("data-theme-lock") === "dark" ||
           root.getAttribute("data-theme-lock") === "light";
  }

  function current() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function apply(mode, persist) {
    var next = mode === "light" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "light" ? "#FAFAF8" : "#121315");
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      var other = next === "light" ? "dark" : "light";
      btn.setAttribute("aria-label", "Switch to " + other + " theme");
      btn.setAttribute("title", "Switch to " + other + " theme");
      btn.setAttribute("aria-pressed", next === "light" ? "true" : "false");
    });
    if (persist && !locked()) {
      try { localStorage.setItem(KEY, next); } catch (e) {}
    }
  }

  function initFromStorage() {
    if (locked()) {
      apply(root.getAttribute("data-theme-lock"), false);
      return;
    }
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    apply(saved === "light" || saved === "dark" ? saved : "dark", false);
  }

  initFromStorage();

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".theme-toggle");
    if (!btn) return;
    apply(current() === "light" ? "dark" : "light", true);
  });
})();
