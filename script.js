// Live clock, Asia/Almaty.
(function () {
  var clock = document.getElementById("clock");
  if (!clock) return;

  function tick() {
    try {
      clock.textContent = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Almaty",
      }).format(new Date());
    } catch (err) {
      clock.textContent = "";
    }
  }
  tick();
  setInterval(tick, 30000);
})();

(function () {
  var embed = document.querySelector("[data-youtube-embed]");

  if (!embed) return;

  var embedUrl = new URL(embed.src);
  embedUrl.searchParams.set("origin", window.location.origin);
  embed.src = embedUrl.toString();
})();
