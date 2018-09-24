var i = 0;

var images = [];

var time = 8000;

images[0] = 'img/girl1.jpg';

images[1] = 'img/girl18.jpg';

images[2] = 'img/girl19.jpg';

images[3] = 'img/girl20.jpg';

function changeImg(){
    document.slider.src = images[i];

    if(i < images.length - 1){
        i++;
       
        }

    else{
        i = 0;
    }

    

    setTimeout("changeImg()", time);
}


window.onload = changeImg;


