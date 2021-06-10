const body = document.querySelector("body");
const bdby = "ASDF";

const IMG_NUMBER = 3;

function paintImage(imageNumber) {
  const image = new Image(); // new 는 document.createElement('image')랑 같음
  image.src = `images/${imageNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
