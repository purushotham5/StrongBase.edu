let images = [];
let time = 3000;
let i = 0;
images[0] =
    "http://2.bp.blogspot.com/-E8FP7852bzc/UKi0TGnux7I/AAAAAAAAASE/DR5pA9x1yJk/s640/dennis_ritchie1.jpg";
images[1] =
    "http://2.bp.blogspot.com/-E8FP7852bzc/UKi0TGnux7I/AAAAAAAAASE/DR5pA9x1yJk/s640/dennis_ritchie1.jpg";

function changeImg() {
    document.slider.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;

/*this is for the menu page */
let menu2 = document.getElementById("nav-id");

function OpenMenuPage() {
    let josh;
    if (josh == true) {
        menu2.style.top = "-5000px";
    } else {
        menu2.style.top = "00%";
    }
}

function CloseMenuPage() {
    let funs;
    if (funs == true) {
        menu2.style.top = "0";
    } else {
        menu2.style.top = "-5000px";
    }
}
let jo = document.getElementById("low-card");
let rough = document.getElementById("up");
let gange = document.getElementById("down");

function nice() {
    let m;
    if (m == true) {
        jo.style.display = "none";
        rough.style.display = "none";
        gange.style.display = "block";
    } else {
        jo.style.display = "flex";
        rough.style.display = "block";
        gange.style.display = "none";
    }
}

function Notnice() {
    let n;
    if (n == true) {
        jo.style.display = "flex";
        rough.style.display = "block";
        gange.style.display = "none";

    } else {
        jo.style.display = "none";
        rough.style.display = "none";
        gange.style.display = "block";
    }
}




/*-------------------------------------------------------------this is for the contact page-------------------------------------------------------------------------------------------------------------------------------------*/
let founder = document.getElementById("contact-page")

function OpenContactPage() {
    let b;
    if (b == true) {
        founder.style.top = "-5000px"
    } else {
        founder.style.top = "0px"
    }
}

function CloseContactPage() {
    let a;
    if (a == true) {
        founder.style.top = "000px"
    } else {
        founder.style.top = "-5000px"
    }
}
/*---------------------------------------------------------------video ppage-----------------------------*/

/*-----------------------------------------------------------------------this is for the demo video ---------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var gold = document.getElementById("video-1")
var rose=document.getElementById("total");
function VideoOpen() {
    let diamond
    if (diamond == true) {
        gold.style.display = "none"
        rose.style.display = "block"

    } else {
        gold.style.display = "block"
        rose.style.display = "none"
    }
}
let vi = document.getElementById("video-id")

function VideoClose() {
    let paltinum
    if (paltinum == true) {
        gold.style.display = "block"
        rose.style.display = "none"
    } else {
        vi.pause()
        gold.style.display = "none"
        rose.style.display = "block"
    }
}

function Play() {
    vi.play()
}



