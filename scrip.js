
document.querySelectorAll(".carousel").forEach(carousel => {

  const track = carousel.querySelector(".track");
  const slides = carousel.querySelectorAll(".slide");
  const next = carousel.querySelector(".next");
  const prev = carousel.querySelector(".prev");
  const dotsContainer = carousel.querySelector(".dots");

  let index = 0;

  // DOTS
  slides.forEach((_, i)=>{
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if(i===0) dot.classList.add("active");
    dotsContainer.appendChild(dot);

    dot.onclick = ()=>{
      index = i;
      update();
    };
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function update(){
    track.scrollTo({
      left: track.clientWidth * index,
      behavior: "smooth"
    });

    dots.forEach(d=>d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  next.onclick = ()=>{
    index = (index + 1) % slides.length;
    update();
  };

  prev.onclick = ()=>{
    index = (index - 1 + slides.length) % slides.length;
    update();
  };

  // AUTO
  setInterval(()=>{
    index = (index + 1) % slides.length;
    update();
  },4000);

});
























console.log("JS cargado");

const track = document.getElementById("track");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;
const width = 800;

next.onclick = () => {
  console.log("next");
  index++;
  if(index > 2) index = 0;
  track.style.transform = "translateX(-" + (index * width) + "px)";
};

prev.onclick = () => {
  console.log("prev");
  index--;
  if(index < 0) index = 2;
  track.style.transform = "translateX(-" + (index * width) + "px)";
};




























let index = 0;

function mover(direccion) {
  const contenedor = document.getElementById("contenedor");
  const total = contenedor.children.length;

  index += direccion;

  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  contenedor.style.transform = `translateX(-${index * 100}%)`;
}