// VIDEO KEYBOARD CONTROL FOR MEDIAGOBLIN
// COULD WORK FOR OTHER HTML5 VIDEO PLAYERS, I GUESS

function videoKeyboardControl(event) {
    let videoID = "vjs_video_3_html5_api";

    let video = document.getElementById(videoID);

    if (document.activeElement.id === videoID) {
        if (event.code === "Space") {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        } else if (event.code === "KeyF") {
            video.requestFullscreen();
        } else if (event.code === "KeyM") {
            if (video.volume !== 0) {
                video.volume = 0;
            } else {
                video.volume = 1
            }
        } else if ((event.code === "Minus") || (event.code === "Equal")) {
            let currentVolume = video.volume;
            if (event.code === "Minus") {
                if ((currentVolume - (1/10) <= 0)) {
                    video.volume = 0;
                } else {
                    video.volume = (currentVolume - (1/10));
                }
            } else {
                if ((currentVolume + (1/10) >= 1)) {
                    video.volume = 1;
                } else {
                    video.volume = (currentVolume + (1/10));
                }
            }
        } else if (event.code.slice(0,5) === "Digit") {
            let digitInteger = parseInt(event.code[5]);
            video.currentTime = video.duration * (digitInteger / 10);
        } //else {
            // console.log(event.code);
        // }
    }
};

document.getElementById("vjs_video_3_html5_api").addEventListener(
    "keyup", videoKeyboardControl
);