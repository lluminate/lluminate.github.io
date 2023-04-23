const trailer = document.getElementById("trailer");

window.onmousemove = e => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
    
  trailer.style.transform = `translate(${x}px, ${y}px)`;
}

function myFunction(){
  document.getElementById("paragraph").innerHTML = "I am a student at Burnaby South"
}