export default function loadMenu() {
  const content = document.getElementById("content");
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const items = ["Pasta Primavera", "Spicy Tuna Roll", "Truffle Burger"];
  items.forEach((item) => {
    const dish = document.createElement("p");
    dish.textContent = item;
    menu.appendChild(dish);
  });

  content.appendChild(menu);
}
