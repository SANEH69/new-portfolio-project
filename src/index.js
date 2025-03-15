function darkTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("black");
  }

  let button = document.querySelector("button");
  button.addEventListener("click", darkTheme)