// Language toggle: remembers the choice, defaults to the browser language.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("savedeck-lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("ko") === 0 ? "ko" : "en");
  function apply(l) {
    document.documentElement.setAttribute("lang", l);
    var b = document.querySelectorAll(".lang button");
    for (var i = 0; i < b.length; i++) b[i].className = b[i].getAttribute("data-l") === l ? "on" : "";
    try { localStorage.setItem("savedeck-lang", l); } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var l = e.target && e.target.getAttribute && e.target.getAttribute("data-l");
    if (l) apply(l);
  });
  apply(lang);
})();
