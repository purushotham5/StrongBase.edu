
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
