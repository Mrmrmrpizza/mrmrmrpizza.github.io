let isEnglish = true;

const welcomeText = document.getElementById("welcome-text");
const aboutButton = document.getElementById("about-button");
const projectsButton = document.getElementById("projects-button");
const languageButton = document.getElementById("language-button");
const aboutTextContainer = document.getElementById("about-text");
const buttonsContainer = document.getElementById("buttons");
const projectsContainer = document.getElementById("projects-container");
const projectsBackButton = document.getElementById("projects-back-button");

window.onload = () => {
  document.body.classList.add("fade-in");
  buttonsContainer.classList.add("fade-in");
  updateProjectPanelLanguage();
};

function obfuscateText(element) {
  const originalText = element.textContent;
  const interval = setInterval(() => {
    element.textContent = originalText.split("").map(() => String.fromCharCode(33 + Math.random() * 94)).join("");
  }, 50);
  setTimeout(() => {
    clearInterval(interval);
    element.textContent = originalText;
  }, 1000);
}

let hiddenButtonPressCount = 0;
const hiddenButton = document.getElementById("hidden-button");
const textEntryBox = document.getElementById("text-entry-box");

hiddenButton.addEventListener("click", () => {
  hiddenButtonPressCount++;
  if (hiddenButtonPressCount >= 10) {
    hiddenButton.style.display = "none";
    textEntryBox.style.display = "block";
  }
});

textEntryBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const inputValue = textEntryBox.value.trim();
    if (inputValue.toLowerCase() === "test") {
      document.body.innerHTML = "<h1 style='text-align: center; margin-top: 20%;'>test</h1>";
    } else if (inputValue === "Hello World!") {
      document.write(`
        <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
          <h1>Hello World!</h1>
        </body>
        </html>`);
      document.close();
    }
  }
});

projectsButton.onclick = () => projectsContainer.classList.toggle("hidden");
projectsBackButton.onclick = () => projectsContainer.classList.add("hidden");


aboutButton.onclick = () => {
  if (aboutButton.classList.contains("expanded")) {
    aboutButton.classList.remove("expanded");
    projectsButton.classList.remove("hidden");
    languageButton.classList.remove("hidden");
    aboutTextContainer.classList.remove("visible");
    aboutTextContainer.innerHTML = "";
  } else {
    aboutButton.classList.add("expanded");
    projectsButton.classList.add("hidden");
    languageButton.classList.add("hidden");
    updateAboutText();
    aboutTextContainer.classList.add("visible");
  }
};

function updateAboutText() {
  const text = isEnglish
    ? "Hi, I am Mrmrmrpizza. I am a Christian and a software developer based in the United States. I primarily specialize in Java programming, but I know Python, HTML, and McFunction as well. I am currently learning Kotlin, C++, and JavaScript at the moment. In my pastime, I like to code mods for Minecraft: Java Edition and make silly applications that serve little to no purpose. In addition to coding, I also like to maintain and sharpen knives, and one of my favorite hobbies with knives is balisong flipping. I just really like how responsive the knife feels in my hand while throwing the weight around when doing tricks. My favorite live-bladed balisong is the Orion 1.5, and my favorite trainer is the Vulp Pro."
    : "Привет, я Mrmrmrpizza. Я христианин и разработчик программного обеспечения из США. Я в первую очередь специализируюсь на программировании на Java, но также знаю Python, HTML и McFunction. В настоящее время я изучаю Kotlin, C++ и JavaScript. В свободное время я люблю писать моды для Minecraft: Java Edition и создавать глупые приложения, которые не служат никакой цели. Помимо программирования, я также люблю обслуживать и точить ножи, и одно из моих любимых хобби с ножами — это переворачивание балисонга. Мне просто очень нравится, как отзывчив нож в моей руке, когда я бросаю его вес во время выполнения трюков. Мой любимый балисонг с живым лезвием — Orion 1.5, а мой любимый тренажер — Vulp Pro.";

  aboutTextContainer.innerHTML = "";
  text.split(" ").forEach((word, i, arr) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.className = "about-word";
    aboutTextContainer.appendChild(span);
    if (i < arr.length - 1) aboutTextContainer.appendChild(document.createTextNode(" "));
    setTimeout(() => (span.style.opacity = "1"), i * 300);
  });
}

function updateProjectPanelLanguage() {
  const [t1, s1, p1, d1] = [
    ".bouncing-cubes h2",
    ".bouncing-cubes details summary",
    ".bouncing-cubes details p",
    ".bouncing-cubes .download-button"
  ].map(sel => document.querySelector(sel));
  const [t2, s2, p2, d2] = [
    ".counting-window h2",
    ".counting-window details summary",
    ".counting-window details p",
    ".counting-window .download-button"
  ].map(sel => document.querySelector(sel));
  if (isEnglish) {
    t1.textContent = "The Incredible Amazing Bouncing Cubes";
    s1.textContent = "About";
    p1.textContent = "A set of funny, wacky, and buggy desktop cubes to mess with when bored. [exe]";
    d1.textContent = "Download";
    t2.textContent = "The Counting Window";
    s2.textContent = "About";
    p2.textContent = "Its a window.. That counts... [jar]";
    d2.textContent = "Download";
    projectsBackButton.textContent = "Projects";
  } else {
    t1.textContent = "Невероятно удивительные прыгающие кубики";
    s1.textContent = "О проекте";
    p1.textContent = "Набор забавных и глючных кубиков, в которые можно играть, когда вам скучно. [exe]";
    d1.textContent = "Скачать";
    t2.textContent = "Окно Счёта";
    s2.textContent = "О проекте";
    p2.textContent = "Это окно.. которое считает... [jar]";
    d2.textContent = "Скачать";
    projectsBackButton.textContent = "Проекты";
  }
}

function switchLanguage() {
  [welcomeText, aboutButton, projectsButton, languageButton].forEach(obfuscateText);
  setTimeout(() => {
    if (isEnglish) {
      welcomeText.textContent = "Я Mrmrmrpizza.";
      aboutButton.textContent = "Обо мне";
      projectsButton.textContent = "Проекты";
      languageButton.textContent = "English";
    } else {
      welcomeText.textContent = "I'm Mrmrmrpizza.";
      aboutButton.textContent = "About";
      projectsButton.textContent = "Projects";
      languageButton.textContent = "Русский";
    }
    isEnglish = !isEnglish;
    if (aboutButton.classList.contains("expanded")) updateAboutText();
    updateProjectPanelLanguage();
  }, 1000);
}

languageButton.addEventListener("click", switchLanguage);
