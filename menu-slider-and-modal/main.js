const toggle = document.querySelector('#toggle')
const open = document.querySelector('#open')
const close = document.querySelector('#close')
const modal = document.querySelector('#modal')

// toggle navigation
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav')
})

// open modal
open.addEventListener('click', () => {
  modal.classList.add('show-modal')
})

// close modal
close.addEventListener('click', () => {
  modal.classList.remove('show-modal')
})

window.addEventListener('click', (e) => {
  // close if clicked outside the modal
  e.target === modal ? modal.classList.remove('show-modal') : false
})