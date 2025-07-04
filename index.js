const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = `url(./images/${kit}.jpg)`;
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = `./sounds/${kit}.mp3`;
  audioEl.type = `audio/mpeg`;
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.play().catch((err) => console.error(`${kit} play error:`, err));
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
