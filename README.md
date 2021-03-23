# VIDEO KEYBOARD CONTROL

This is a script for controlling a MediaGoblin video with keyboard input. 

I tried using keyboard input on this video, but it didn't work. 

https://media.libreplanet.org/u/zakkai/m/javascript-if-you-love-it-set-it-free-54ab/

Keyboard playback control is a nice thing to have when watching videos online, so I think it would be a great feature for MediaGoblin.

# HOW IT WORKS

This script applies a 'keyup' event listener to the HTML element with the following ID: "vjs_video_3_html5_api"

If that element is selected, the inputs will trigger.

# SUPPORTED CONTROLS

- SPACEBAR will either play or pause the video.
- F will send out a requestFullscreen() for the video. If the video is in fullscreen mode, ESC seems to exit fullscreen without needing to write it in, at least for Chrome.
- M will either mute the video's audio, or set the volume at maximum.
- The MINUS key will lower the video's volume by one-tenth, unless the audio is muted.
- The EQUALS key will increase the video's volume by one-tenth, unless the audio is at maximum volume.
- If one of the NUMBER KEYS is pressed, it will skip to position n/10 in the video. For example, if the video is ten minutes long, pressing 5 will begin playing the video from the five-minute mark.

I know it isn't much, but this really does add to the video-watching experience. 
