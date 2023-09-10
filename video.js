let v = document.getElementById("video-1");
let vi = document.getElementById("video-id")

function VideoOpen() {
    let a;
    if (a == true) {
        v.style.display = "none";
    } else {
        v.style.display = "block";
    }
}

function VideoClose() {
    let b;
    if (b == true) {
        v.style.display = "block";
    } else {
        vi.pause()
        v.style.display = "none";
    }
}

function Play() {
    vi.play()
}