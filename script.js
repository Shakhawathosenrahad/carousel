// working with carousel

const carousel = document.querySelector(".carousel-container .carousel");
const cards = carousel.querySelectorAll(".carousel-card");
const dots = document.querySelector(".carousel-container .dots");
const arrows = document.querySelectorAll(".carousel-container > .fa-solid");
let cardIndex = 0;

cards.forEach((card, index) => {
  if(index > cards.length - 3) return;
  console.log(index);
  let dot = document.createElement("label");
  dots.appendChild(dot);
  dot.onclick = () => {
    cardIndex = index;
    UpdateCarousel(index);
  }
})

dots.children[cardIndex].classList.add("active");

const responsive = () => {
  let total = 3;
  if(innerWidth < 900 && innerWidth > 600) total = 2;
  else if(innerWidth <= 600) total = 1;
  return total;
}

arrows.forEach((arrow, index) => {
  arrow.onclick = () => {
    let total = responsive();
    if(index === 0) {
      cardIndex -= 1;
      if(cardIndex < 0) cardIndex = cards.length - total;
    }
    if(index === 1) {
      cardIndex += 1;
      if(cardIndex > cards.length - total) cardIndex = 0;
    }
    
    UpdateCarousel(cardIndex);
  }
})

const UpdateCarousel = (dataindex) => {
  let total = responsive();
  carousel.style.transform = `translateX(-${dataindex * (100 / total)}%)`;

  for (let i = 0; i < dots.children.length; i++) {
    if(i === cardIndex) {
      dots.children[i].classList.add("active");
    }
    else {
      dots.children[i].classList.remove("active");
    }
  }
}