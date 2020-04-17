



const changeHeart = (elem) => {

    switch (elem.getAttribute('src')) {
        case 'img/heart_empty.png': {
             elem.setAttribute('src',"img/heart_half.png");
        }
        break;
        case 'img/heart_half.png': {
            elem.setAttribute('src','img/heart_full.png');
        }
        break;
        case 'img/heart_full.png': {
            elem.setAttribute('src','img/heart_empty.png')
        }
        break;
    }

}