
let i = 0;
let images = [];
let time = 500;

images[0] = '.\resources\sampleshoot\x01.jpg';
images[1] = '.\resources\sampleshoot\x02.jpg';
images[2] = '.\resources\sampleshoot\x03.jpg';
images[3] = '.\resources\sampleshoot\x04.jpg';
images[4] = '.\resources\sampleshoot\x05.jpg';

console.log(images);


function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("chaneImg()", time);
}

document.window.onload = changeImg;

