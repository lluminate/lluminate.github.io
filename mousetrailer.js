window.onload = () => {
    const trailer = document.getElementById("trailer");
    const cursor = document.getElementById("cursor");
    const icon = document.getElementById("trailer-icon");
  
    const animateTrailer = (e, interacting) => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;
  
        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`
        }
  
        trailer.animate(keyframes, {
            duration: 800,
            fill: "forwards",
        });
    };
  
    const getTrailersIcon = type => {
      switch (type) {
        case "button":
          return "pan_tool_alt";
        case "video":
          return "play_arrow";
        case "image":
          return "zoom_out_map";
        default:
          return "north_east";
    }};
    
    const handleMouseMove = (e) => {
        const interactable = e.target.closest(".interactable");
        const interacting = interactable !== null;

        const x = e.clientX - cursor.offsetWidth / 2,
            y = e.clientY - cursor.offsetHeight / 2;
        
        cursor.style.transform = `translate(${x}px, ${y}px)`;

        animateTrailer(e, interacting);
        
        trailer.dataset.type = interacting ? interactable.dataset.type : "";

        if (interacting) {
            cursor.style.display = "none";
            trailer.style.opacity = 1;
            
            if (interacting) {
                icon.innerHTML = getTrailersIcon(interactable.dataset.type);
            }
        } else {
            cursor.style.display = "block";
            trailer.style.opacity = 0.2;
        }
    };


    window.addEventListener("mousemove", handleMouseMove);
  }