function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

// BY USING TOGGLE : ON KO OFF / OFF KO ON
const themebutton = document.getElementById("theme-button");
themebutton.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor == "white") {
    changeBackground("black");
    themebutton.innerText = "Light Mode";
  } else {
    changeBackground("white");
    themebutton.innerText = "Dark Mode";
  }
});
