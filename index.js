window.onload = () => {
  const trailer = document.getElementById("trailer");

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`
    }

    trailer.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  }

  const getTrailersClass = type => {
    switch (type) {
      case "button":
        return "pan_tool_alt";
      case "video":
        return "play_arrow";
      case "image":
        return "zoom_out_map";
      default:
        return "north_east";
  }}

  window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

    const icon = document.getElementById("trailer-icon");

    animateTrailer(e, interacting);

    trailer.dataset.type = interacting ? interactable.dataset.type : "";

    if (interacting) {
      icon.innerHTML = getTrailersClass(interactable.dataset.type);  
    }
  }
}



function toggleContact() {
  const contactButton = document.getElementById("contact");
  const isClicked = contactButton.getAttribute("data-clicked") === "true";
  const newButtonText = isClicked ? "Contact" : "Github: @lluminate";
  contactButton.innerHTML = newButtonText;
  contactButton.setAttribute("data-clicked", !isClicked);
}