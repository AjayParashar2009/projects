let song = document.getElementById('song')
let contIcon = document.getElementById('contIcon')
let progress = document.getElementById('progress')


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

}


function playPause() {
    if (contIcon.classList.contains('fa-pause')) {
        song.pause()
        contIcon.classList.remove('fa-pause')
        contIcon.classList.add('fa-play')
    } else {
        song.play()
        contIcon.classList.remove('fa-play')
        contIcon.classList.add('fa-pause')
    }
}

if(song.play()){ 
setInterval(() => {
    // progress.value = song.currentTime;
}, 500)
}


progress.onchange = function () {
    song.play()
    song.currentTime = progress.value
    contIcon.classList.remove('fa-play')
    contIcon.classList.add('fa-pause')
}