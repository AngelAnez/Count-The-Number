let number = document.getElementById("number");
let emoji = document.getElementById("emoji");
let max = 1000;
let min = -1000;


function decrease(){
    number.innerHTML--;
    change();
}

function increase(){
    number.innerHTML++;
    change();
}

function reset(){
    number.innerHTML = 0;
    change();
}

function randomize(){
    let new_number = Math.floor(Math.random()*(max-min+1)+min);
    number.innerHTML = new_number;
    change();
}

function change(){
    if (number.innerHTML == 0){
        emoji.innerHTML = "😶" 
    } else if (number.innerHTML == 9){
        emoji.innerHTML = "🖤🌼"
    } else if (number.innerHTML == 29){
        emoji.innerHTML = "☁❄"
    } else if (number.innerHTML > 0 && number.innerHTML < 100){
        emoji.innerHTML = "😗"
    } else if (number.innerHTML >= 100 && number.innerHTML < 200){
        emoji.innerHTML = "😙"
    } else if (number.innerHTML >= 200 && number.innerHTML < 300){
        emoji.innerHTML = "😉"
    } else if (number.innerHTML >= 300 && number.innerHTML < 400){
        emoji.innerHTML = "😄"
    } else if (number.innerHTML >= 400 && number.innerHTML < 500){
        emoji.innerHTML = "😆"
    } else if (number.innerHTML >= 500 && number.innerHTML < 600){
        emoji.innerHTML = "😁"
    } else if (number.innerHTML >= 600 && number.innerHTML < 700){
        emoji.innerHTML = "😎"
    } else if (number.innerHTML >= 700 && number.innerHTML < 800){
        emoji.innerHTML = "🤑"
    } else if (number.innerHTML >= 800 && number.innerHTML < 900){
        emoji.innerHTML = "🥳"
    } else if (number.innerHTML >= 900 && number.innerHTML < 1000){
        emoji.innerHTML = "🌟"
    } else if (number.innerHTML < -0 && number.innerHTML > -100){
        emoji.innerHTML = "😑"
    } else if (number.innerHTML <= -100 && number.innerHTML > -200){
        emoji.innerHTML = "😪"
    } else if (number.innerHTML <= -200 && number.innerHTML > -300){
        emoji.innerHTML = "🥱"
    } else if (number.innerHTML <= -300 && number.innerHTML > -400){
        emoji.innerHTML = "😌"
    } else if (number.innerHTML <= -400 && number.innerHTML > -500){
        emoji.innerHTML = "😔"
    } else if (number.innerHTML <= -500 && number.innerHTML > -600){
        emoji.innerHTML = "😣"
    } else if (number.innerHTML <= -600 && number.innerHTML > -700){
        emoji.innerHTML = "😖"
    } else if (number.innerHTML <= -700 && number.innerHTML > -800){
        emoji.innerHTML = "😩"
    } else if (number.innerHTML <= -800 && number.innerHTML > -900){
        emoji.innerHTML = "😭"
    } else{
        emoji.innerHTML = "💀"
    }
}