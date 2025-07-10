(() => {
  const blockedDomains = [
    "ynet\\.co\\.il", "walla\\.co\\.il", "mako\\.co\\.il", "haaretz\\.(co\\.il|com)",
    "israelhayom\\.co\\.il", "globes\\.co\\.il", "calcalist\\.co\\.il", "n12\\.co\\.il",
    "kan\\.org\\.il", "srugim\\.co\\.il", "inn\\.co\\.il", "maariv\\.co\\.il", "bhol\\.co\\.il",
    "rotter\\.net", "cnn\\.com", "bbc\\.com", "foxnews\\.com", "nytimes\\.com",
    "washingtonpost\\.com", "nbcnews\\.com", "abcnews\\.go\\.com", "cbsnews\\.com",
    "reuters\\.com", "bloomberg\\.com", "theguardian\\.com", "apnews\\.com", "aljazeera\\.com",
    "dw\\.com", "sky\\.com", "news\\.yahoo\\.com", "npr\\.org", "theatlantic\\.com",
    "forbes\\.com", "time\\.com", "axios\\.com"
  ];

  const currentHost = location.hostname;
  const isBlocked = blockedDomains.some(pattern => new RegExp(pattern).test(currentHost));
  if (!isBlocked) return;

  const messages = {
    en: {
      title: "🛑 Take a Break from the News",
      message: "You deserve peace. Come back later when you're ready.",
      button: "Let Me In Anyway",
      dir: "ltr"
    },
    he: {
      title: "🛑 הגיע הזמן להתנתק",
      message: "תן לעצמך רגע של שקט. החדשות יחכו.",
      button: "בכל זאת להיכנס",
      dir: "rtl"
    },
    ar: {
      title: "🛑 خذ استراحة من الأخبار",
      message: "أنت تستحق بعض السلام. ارجع لاحقًا عندما تكون مستعدًا.",
      button: "دعني أدخل",
      dir: "rtl"
    },
    fr: {
      title: "🛑 Faites une pause",
      message: "Prenez un moment de calme. Revenez plus tard.",
      button: "Entrer quand même",
      dir: "ltr"
    },
    es: {
      title: "🛑 Tómate un descanso",
      message: "Te mereces un poco de paz. Vuelve más tarde.",
      button: "Déjame entrar",
      dir: "ltr"
    }
  };

  const lang = navigator.language?.split('-')[0] || 'en';
  const locale = messages[lang] ? lang : 'en';
  const { title, message, button, dir } = messages[locale];

  // Clean up page
  document.head.innerHTML = "";
  document.body.innerHTML = "";
  document.title = title;

  // Create animated and styled layout
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    body {
      margin: 0;
      background: linear-gradient(135deg, #1d1f20, #3a3f47);
      font-family: 'Segoe UI', sans-serif;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
    }
    .block-wrapper {
      text-align: center;
      animation: fadeIn 1s ease-out;
      max-width: 600px;
      padding: 40px;
      background: rgba(0,0,0,0.5);
      border-radius: 16px;
      box-shadow: 0 0 20px rgba(0,0,0,0.4);
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 0.5em;
    }
    p {
      font-size: 1.2em;
      margin-bottom: 1.5em;
    }
    button {
      padding: 12px 24px;
      font-size: 1em;
      border: none;
      border-radius: 8px;
      background: #ff4d4d;
      color: white;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background: #ff1a1a;
    }
  `;
  document.head.appendChild(style);

  const wrapper = document.createElement("div");
  wrapper.className = "block-wrapper";
  wrapper.setAttribute("dir", dir);
  wrapper.innerHTML = `
    <h1>${title}</h1>
    <p>${message}</p>
    <button id="bypass">${button}</button>
  `;
  document.body.appendChild(wrapper);

  document.getElementById("bypass").onclick = () => {
    location.reload();
  };
})();
