(function () {
  "use strict";

  function smoothScrollTo(targetElement, offset) {
    var y = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  function collapseNavbarMenu() {
    var navbarCollapse = document.querySelector(".navbar-collapse");
    if (!navbarCollapse || !navbarCollapse.classList.contains("show") || !window.bootstrap) {
      return;
    }
    window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
  }

  function setNavbarShrink() {
    var mainNav = document.getElementById("mainNav");
    if (!mainNav) {
      return;
    }
    if (window.pageYOffset > 100) {
      mainNav.classList.add("navbar-shrink");
      return;
    }
    mainNav.classList.remove("navbar-shrink");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var scrollTriggers = document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])');

    scrollTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        var samePath = location.pathname.replace(/^\//, "") === trigger.pathname.replace(/^\//, "");
        if (!samePath || location.hostname !== trigger.hostname) {
          return;
        }

        var hash = trigger.hash ? trigger.hash.slice(1) : "";
        var target = hash ? document.getElementById(hash) : null;
        if (!target && hash) {
          target = document.querySelector('[name="' + CSS.escape(hash) + '"]');
        }

        if (!target) {
          return;
        }

        event.preventDefault();
        smoothScrollTo(target, 48);
        collapseNavbarMenu();
      });
    });

    if (window.bootstrap) {
      window.bootstrap.ScrollSpy.getOrCreateInstance(document.body, {
        target: "#mainNav",
        offset: 54,
      });
    }

    setNavbarShrink();
    window.addEventListener("scroll", setNavbarShrink, { passive: true });
  });
})();
