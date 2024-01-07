const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

//using async/await
async function generateJoke() {
  const config = {
    header: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
