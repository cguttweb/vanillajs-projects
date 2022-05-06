
const postsContainer = document.querySelector('#posts-container')

const loading = document.querySelector('.loader')
const filter = document.querySelector('#filter')

let limit = 4
let page = 1

async function getPosts(){
  const resp = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

  const data = await resp.json()
  return data
}

// Display posts
async function showPosts() {
  const posts = await getPosts()

  // loop throgh posts
  posts.forEach(post => {
    const postEl = document.createElement('div')
    postEl.classList.add('post')
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
      </div>
    `

    postsContainer.appendChild(postEl)
  })
}

// Show loader & get more posts
function showLoader(){
  loading.classList.add('show')

  setTimeout(() => {
    loading.classList.remove('show')

    setTimeout(() => {
      page++
      showPosts()
    }, 500);

  }, 1000);
}

// Filter posts
function filterPosts(e){
  const term = e.target.value.toUpperCase()
  const posts = document.querySelectorAll('.post')

  posts.forEach(post => {
    const title = post.querySelector('.post-title').innerText.toUpperCase()
    const body = post.querySelector('.post-body').innerText.toUpperCase()

    if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
      post.style.display = 'flex'
    } else {
      post.style.display = 'none'
    }
  })
}

showPosts()

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if(scrollTop + clientHeight >= scrollHeight - 5){
    showLoader();
  }
})

filter.addEventListener('input', filterPosts)