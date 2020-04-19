
let criteria = ["Love is Patient",
"Love is Kind",
"Love Does Not Envy",
"Love Does Not Boast",
"Love is Not Proud",
"Love Does Not Dishonour Others",
"Love is Not Self-Seeking",
"Love is Not Easily Angered",
"Love Keeps No Record of Wrongs",
"Love Does Not Delight in Evil",
"Love Rejoices with the Truth",
"Love Always Protects",
"Love Always Trusts",
"Love Always Hopes",
"Love Always Perseveres",
"Love Never Fails"
]


const changeHeart = (elem) => {

    document.getElementById("score").style.display='none';

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

const getScore = () => {
    let hearts = document.getElementsByClassName("hearts");

    let score = 0;
    let halfHeart = 3.125;
    let fullHeart = 6.25;

    for (let i = 0;i<hearts.length;i++) {
        switch (hearts[i].getAttribute('src')) {
            case "img/heart_empty.png": {
                score += 0;
            }
            break;
            case "img/heart_half.png": {
                score += halfHeart;
            }
            break;
            case "img/heart_full.png": {
                score += fullHeart;
            }
            break;
        }
    }

    score/= 2;
    if (score===100) {score = 0;}
    document.getElementById("score").innerHTML="Your love value is: " + parseFloat(score).toFixed(2);
    document.getElementById("score").style.display = 'block';
}

const setupBoard = () => {
    let htmlStr = "";
    for (let i = 0;i<criteria.length;i++) {
        htmlStr += `<div class="outerDiv">
        <div style="display:inline;"><img class="hearts" src="img/heart_empty.png" style="width:20vw;" onclick="changeHeart(this)"></div>
        <div style="display:inline;margin-left: 10px;margin-right: 10px;">${criteria[i]}</div>
        <div style="display:inline;"><img class="hearts" src="img/heart_empty.png" style="width:20vw;" onclick="changeHeart(this)"></div>
    </div>`
    }

    document.getElementById("wrapper").innerHTML = htmlStr;
}

setupBoard();