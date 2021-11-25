async function animateBackgroundImages(num){
    var images = document.getElementsByClassName('Slider-slide');
   
   
    if(num > images.length-1){
        images[images.length-1].style.opacity = 0;
        num = 0;
    }else if(num > images.length-2){
        for(let i = 0; i < num; i++){
            images[i].style.opacity = 0;
        }
    }
   images[num].style.opacity = 1;
   num +=1;
setTimeout(animateBackgroundImages, 7500, num);

};

