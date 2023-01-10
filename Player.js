//constructor function

function Player(videoPlayerID) {
    this.videoPlayerDiv = document.getElementById(videoPlayerID);
    this.playIcon = '<i class="fa-solid fa-play"></i>';
    this.pauseIcon = '<i class="fa-solid fa-pause"></i>';
    this.videoPlayer = this.videoPlayerDiv.querySelector('video');
    this.playPauseBtn = this.videoPlayerDiv.querySelector('.playPause');
    this.reloadBtn = this.videoPlayerDiv.querySelector('.reload');
}
Player.prototype.init = function () {
    this.playPauseBtn.addEventListener('click', this.playPause.bind(this));
    this.reloadBtn.addEventListener('click', this.reloadVideo.bind(this));
}
Player.prototype.playPause = function () {
    if (this.playPauseBtn.innerHTML === this.playIcon) {
        this.videoPlayer.play();
        this.playPauseBtn.innerHTML = this.pauseIcon;
    } else if (this.playPauseBtn.innerHTML === this.pauseIcon) {
        this.videoPlayer.pause();
        this.playPauseBtn.innerHTML = this.playIcon;
    }
}
Player.prototype.reloadVideo = function () {
    this.videoPlayer.load();
    this.playPauseBtn.innerHTML = this.playIcon;
}

