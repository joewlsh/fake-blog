
async function getData() {
let urlUser = "https://jsonplaceholder.typicode.com/users"

let userRes = await fetch(urlUser)

let urlPost = "https://jsonplaceholder.typicode.com/posts"

let postRes = await fetch(urlPost)

let names = await userRes.json()

// let userText = await userRes.text()

// let postText = await postRes.text()

console.log(names)
console.log(posts)
}
userRes.addEventListener('click', (event) => {
    document.location = "https://jsonplaceholder.typicode.com"
})

userRes = document.getElementById('authors')

postRes = document.getElementById('posts')
getData()