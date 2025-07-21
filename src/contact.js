export default function loadContact() {
  const content = document.getElementById("content");
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phone = document.createElement("p");
  phone.textContent = "Phone: (555)-123-4567";

  const address = document.createElement("p");
  address.textContent = "123 Flavor Street, Tastytown, USA";

  contact.appendChild(phone);
  contact.appendChild(address);
  content.appendChild(contact);
}
