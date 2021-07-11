const images = [
    "paljo.jpeg",
    "ayanggyo.jpg",
    "uksu.jpg",
    "birobong.jpg",
    "martensite.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "background"
document.body.appendChild(bgImage);
