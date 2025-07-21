export default function loadHome() {
  const content = document.getElementById("content");

  const home = document.createElement("div");
  home.classList.add("home");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Flavor Heaven";

  const image = document.createElement("img");
  image.src =
    "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg";
  image.alt = "Restaurant";

  const description = document.createElement("p");
  description.textContent =
    "Come enjoy the best flavors in town. Farm-to-table freshness served daily.";

  home.appendChild(headline);
  home.appendChild(image);
  home.appendChild(description);

  content.appendChild(home);
}
