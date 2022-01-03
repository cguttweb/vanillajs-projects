const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Functions
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const smallEl = formControl.querySelector('small')
  smallEl.textContent = message
}

function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// Check email is valid
function isEmailValid(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Event Listeners
form.addEventListener('submit', e => {
  e.preventDefault()

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username)
  }

  if (email.value === '') {
    showError(email, 'Email is required')
  } else if (!isEmailValid(email.value)) {
    showError(email, 'Email is invalid')
  } else {
    showSuccess(email)
  }

  if (password.value === '') {
    showError(password, 'Password is required')
  } else {
    showSuccess(password)
  }

  if (password2.value === '') {
    showError(password2, 'Passwords do not match')
  } else {
    showSuccess(password2)
  }
})
