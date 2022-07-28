const word = document.getElementById('word')
const text = document.getElementById('text')
const score = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficulty = document.getElementById('difficulty')

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving',
]

let randomWord

// initialise score
let myScore = 0

let time = 10

let setDifficulty =
  localStorage.getItem('difficulty') != null
    ? localStorage.getItem('difficulty')
    : 'medium'

// Set difficulty select value
difficulty.value =
  localStorage.getItem('difficulty') != null
    ? localStorage.getItem('difficulty')
    : 'medium'

// Focus text at start
text.focus()

const timeInterval = setInterval(updateTime, 500)

function getRandomWord() {
  // floor rounds down
  return words[Math.floor(Math.random() * words.length)]
}

function addWordToDOM() {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}

function updateScore() {
  myScore++
  scoreEl.innerHTML = myScore
}

function updateTime() {
  time--
  timeEl.innerHTML = `${time}s`

  if (time === 0) {
    clearInterval(timeInterval)
    gameOver()
  }
}

// End Game
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your score is ${myScore}</p>
    <button onclick="location.reload()">Reload</button>
  `

  endgameEl.style.display = 'flex'
}

addWordToDOM()

// Event Listeners
text.addEventListener('input', e => {
  const insertedText = e.target.value

  if (insertedText === randomWord) {
    addWordToDOM()

    // clear input
    e.target.value = ''

    if (difficulty === 'hard') {
      time += 2
    } else if (difficulty === 'medium') {
      time += 3
    }
    time += 5

    updateTime()
  }
})

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('hide')
})

settingsForm.addEventListener('change', e => {
  setDifficulty = e.target.value
  console.log(setDifficulty)
  localStorage.setItem('difficulty', difficulty)
})
