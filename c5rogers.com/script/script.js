setInterval((function(images) {
    var index = -1,
        changeImage;
    changeImage = function() {
        index = (index + 1) % images.length;
        document.getElementById("imagePart").style.backgroundImage = 'url(' + images[index] + ')';
    };
    changeImage();
    return changeImage;
}([
    '../image/ene.jpg',
    '../image/32.jpg',
    '../image/33.jpg',
    '../image/car.jpg',
    '../image/car2.jpg',
    '../image/car3.jpg',
    '../image/car4.jpg',
    '../image/car5.jpg',
    '../image/car6.jpg',
    '../image/car7.jpg',
    '../image/car8.jpg',
    '../image/car9.jpg',
    '../image/car10.jpg',
    '../image/car11.jpg',
    '../image/car12.jpg',
    '../image/car13.jpg'
])), 3000);