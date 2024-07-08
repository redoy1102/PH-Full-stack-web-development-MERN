const getPost = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
        .then(response => response.json())
        .then(posts => creatingPost(posts))
}

const creatingPost = (posts) => {
    const postContainer = document.getElementById('post_container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>Id: ${post.id}</h3>
            <h4>${post.title}</h4>
            <h5>${post.body}</h5>
        `
        postContainer.appendChild(div);
    }
}
