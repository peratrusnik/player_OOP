// let videoPlayerDiv = document.getElementById('videoPlayer');
// let videoPlayer = videoPlayerDiv.querySelector('video');
// let playPauseBtn = videoPlayerDiv.querySelector('.playPause');
// let reloadBtn = videoPlayerDiv.querySelector('.reload');
// let playIcon = '<i class="fa-solid fa-play"></i>';
// let pauseIcon = '<i class="fa-solid fa-pause"></i>';


// playPauseBtn.addEventListener('click', playPause);
// reloadBtn.addEventListener('click', reloadVideo);


// function playPause() {
//     if (this.innerHTML === playIcon) {
//         videoPlayer.play();
//         this.innerHTML = pauseIcon;
//     } else if (this.innerHTML === pauseIcon) {
//         videoPlayer.pause();
//         this.innerHTML = playIcon;
//     }
    
// }
// function reloadVideo() {
//     videoPlayer.load();
//     playPauseBtn.innerHTML = playIcon;
// }

/////////////////////////////////////////


///object function

// let player = {
//     videoPlayerDiv: document.getElementById('videoPlayer'),
//     playIcon: '<i class="fa-solid fa-play"></i>',
//     pauseIcon: '<i class="fa-solid fa-pause"></i>',
//     videoPlayer: null,
//     playPauseBtn: null,
//     reloadBtn: null,
//     init: function () {
//         //selectors
//         this.videoPlayer = this.videoPlayerDiv.querySelector('video'),
//         this.playPauseBtn = this.videoPlayerDiv.querySelector('.playPause'),
//         this.reloadBtn = this.videoPlayerDiv.querySelector('.reload'),
//         // listeners
//             // this is object player
//         this.playPauseBtn.addEventListener('click', this.playPause.bind(this)),
//             this.reloadBtn.addEventListener('click', () => {
//                 this.reloadVideo(this);
//         })
//     },
//     playPause: function () {
//         if (this.playPauseBtn.innerHTML === this.playIcon) {
//                     this.videoPlayer.play();
//                     this.playPauseBtn.innerHTML = this.pauseIcon;
//                 } else if (this.playPauseBtn.innerHTML === this.pauseIcon) {
//                     this.videoPlayer.pause();
//                     this.playPauseBtn.innerHTML = this.playIcon;
//                 }
//     },
//     reloadVideo: function (video) {
//         video.videoPlayer.load();
//     },
// }
// player.init()
// console.log(player);


//////////////////////////



let p1 = new Player('videoPlayer');
p1.init();
let p2 = new Player('videoPlayer2');
p2.init();