import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const playPauseButton = document.querySelector('button#play-pause');
const mutUnmuteButton = document.querySelector('button#mute-unmute');

const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay(),
  new AutoPause()
] });
playPauseButton.onclick = () => player.togglePlay();
mutUnmuteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(error => {
    console.log(error.message);
  })
}