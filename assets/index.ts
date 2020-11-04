import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const playPauseButton: HTMLElement = document.querySelector('button#play-pause');
const mutUnmuteButton: HTMLElement = document.querySelector('button#mute-unmute');

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