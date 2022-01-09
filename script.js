console.log("Hello World");
let mysong = document.getElementById('mysong');
let icon = document.getElementById('play-btn');

icon.onclick = () => {
    if (mysong.paused) {
        mysong.play();
        icon.src = 'https://1001freedownloads.s3.amazonaws.com/vector/thumb/84300/wm_pause.png';
    } else {
        mysong.pause();
        icon.src = 'https://cdn.pixabay.com/photo/2013/07/12/16/56/play-151523_640.png';
    }
}