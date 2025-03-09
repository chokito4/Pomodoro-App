const timer = document.getElementById('timer');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const playBtn = document.getElementById('playBtn');
const toggleBtn = document.getElementById('toggletheme')
let isPlaying = false;

if(Notification.permission === "default") {
    Notification.requestPermission();
}

let timeleft = 25 * 60;


resetBtn.addEventListener('click', () => {
    timeleft = 25 * 60;
})

pauseBtn.addEventListener('click', () => {
    isPlaying = false;
});

playBtn.addEventListener('click', () => {
    if (!timeleft <= 0){
        isPlaying = true;
    }
});

const time = setInterval(() => {
    if (isPlaying == true && timeleft >= 1){
        timeleft--;
    }
    timer.textContent = format(timeleft);
}, 1000);


if (timeleft == 0) {
    if(Notification.permission === "granted"){
        new Notification("Pomodoro", {
            body: "Descanse agora"
        })
    }
}

function format(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
