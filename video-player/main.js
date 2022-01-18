const video = document.getElementById('video')
const play = document.getElementById('start')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const time = document.getElementById('timestamp')


function toggleVideoStatus(){
  // paused is option in html5
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updatePlayIcon(){
  if(video.paused){
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
  }
}

// update progress and timestamp
function updateProgress(){
  // to get %
  progress.value = (video.currentTime / video.duration) * 100

  let mins = Math.floor(video.currentTime / 60)
  if (mins < 10) {
    mins = '0' + String(mins)
  }

  let seconds = Math.floor(video.currentTime % 60)
  if (seconds < 10) {
    seconds = '0' + String(seconds)
  }

  timestamp.innerHTML = `${mins} ${seconds}`
}

function setVideoProgress(){
  // adding '+' ensure a number is returned
  video.currentTime = (+progress.value * video.duration / 100)
}

function stopVideo(){
  // resets to beginning
  video.currentTime = 0;
  video.pause()
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)