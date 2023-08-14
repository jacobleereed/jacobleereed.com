const numOfImages = 82;
const images = [];
let currentImage = 0;

for (let i = 1; i <= numOfImages; i++) {
    let tempImgURL = './resources/Sample/' + i + '.jpg';
    images.push(tempImgURL);
}

const img = document.querySelector("img");
img.src = images[currentImage];

const leftArrowFunc = () => {
    if (currentImage === 0) {
        img.src = images[numOfImages -1];
        currentImage = numOfImages - 1;
    } else {
        img.src = images[currentImage--];
    }
}

const rightArrowFunc = () => {
    if (currentImage === (numOfImages)) {
        img.src = images[0];
        currentImage = 0;
    } else {
        img.src = images[currentImage++];
    }
}


const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");


leftArrow.addEventListener("click", leftArrowFunc);
rightArrow.addEventListener("click", rightArrowFunc);

