(() => {
  const blockedDomains = [
    ".*ynet\.co\.il.*",
    ".*walla\.co\.il.*",
    ".*mako\.co\.il.*",
    ".*haaretz\.co\.il.*",
    ".*haaretz\.com.*",
    ".*israelhayom\.co\.il.*",
    ".*globes\.co\.il.*",
    ".*calcalist\.co\.il.*",
    ".*n12\.co\.il.*",
    ".*kan\.org\.il.*",
    ".*srugim\.co\.il.*",
    ".*inn\.co\.il.*",
    ".*maariv\.co\.il.*",
    ".*bhol\.co\.il.*",
    ".*rotter\.net.*",
    ".*cnn\.com.*",
    ".*bbc\.com.*",
    ".*foxnews\.com.*",
    ".*nytimes\.com.*",
    ".*washingtonpost\.com.*",
    ".*nbcnews\.com.*",
    ".*abcnews\.go\.com.*",
    ".*cbsnews\.com.*",
    ".*reuters\.com.*",
    ".*bloomberg\.com.*",
    ".*theguardian\.com.*",
    ".*apnews\.com.*",
    ".*aljazeera\.com.*",
    ".*dw\.com.*",
    ".*sky\.com.*",
    ".*news\.yahoo\.com.*",
    ".*npr\.org.*",
    ".*theatlantic\.com.*",
    ".*forbes\.com.*",
    ".*time\.com.*",
    ".*axios\.com.*"
  ];

  const currentHost = window.location.hostname;
  const matched = blockedDomains.some(pattern => new RegExp(pattern).test(currentHost));
  if (!matched) return;

  // Block layout
  document.documentElement.innerHTML = "";
  document.documentElement.style.background = "#111";
  document.title = "News Blocked";

  const wrapper = document.createElement("div");
  wrapper.style = "color:white;font-family:sans-serif;text-align:center;margin-top:20vh;";
  wrapper.innerHTML = `
    <h1>🛑 החדשות חסומות</h1>
    <p>נראה שאתה מנסה להיכנס לאתר חדשות.</p>
    <button id="bypass" style="padding:10px 20px;margin-top:20px;">תן לי להיכנס בכל זאת</button>
  `;
  document.body.appendChild(wrapper);

  document.getElementById("bypass").onclick = () => {
    location.reload();
  };
})();
