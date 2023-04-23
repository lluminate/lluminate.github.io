function toggleContact() {
  const contactButton = document.getElementById("contact");
  const isClicked = contactButton.getAttribute("data-clicked") === "true";
  const newButtonText = isClicked ? "Contact" : "Github: @lluminate";
  contactButton.innerHTML = newButtonText;
  contactButton.setAttribute("data-clicked", !isClicked);
}