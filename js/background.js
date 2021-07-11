const images = [
    "팔조령.jpeg",
    "아양교.jpg",
    "욱수지.jpg",
    "비로봉.jpg",
    "마르텐사이트.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "background"
document.body.appendChild(bgImage);
