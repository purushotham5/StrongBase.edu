let images = [];
let time = 3000;
let i = 0;
images[0] = "https://worldkings.org/Userfiles/Upload/images/79x.jpg"
images[1] = "https://external-preview.redd.it/vL1t9lPQj_4lA-2biWa34XCMWp4TCzgxGh6trfBzrYk.jpg?format=pjpg&auto=webp&s=2954b9f87354dd8490fa0c823cc2e239ccef78f5";
images[2] = "https://cdn.thenewstack.io/media/2018/08/f6d29249-brendan-eich.jpg";
images[3] = "https://upload.wikimedia.org/wikipedia/commons/f/fe/Brendan_Eich_%284693852906%29.jpg";
images[4] = "https://img.youtube.com/vi/aX3ZABCdC38/hqdefault.jpg";

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




/*-------------------------------------------------------------this is for the c    ontact page-------------------------------------------------------------------------------------------------------------------------------------*/
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