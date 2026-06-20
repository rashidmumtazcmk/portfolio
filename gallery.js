const imageFiles = [
    "1.jpg",
    "2.jpg",
   
];

const gallery = document.getElementById("gallery");

imageFiles.forEach(file => {
    const img = document.createElement("img");
    img.src = `images/${file}`;
    gallery.appendChild(img);
});