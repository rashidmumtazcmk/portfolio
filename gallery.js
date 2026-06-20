const imageFiles = [
    "1.png",
    "2.png",
   
];

const gallery = document.getElementById("gallery");

imageFiles.forEach(file => {
    const img = document.createElement("img");
    img.src = `images/${file}`;
    gallery.appendChild(img);
});