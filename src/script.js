let output = document.getElementById('output');

function returnPost(link, title, score, author, comments_num) {
    return `<a href='${link}' target='_blank'><li><p>${title}</p><span>${score} pts</span><span>by ${author}</span><span>${comments_num} comments</span></li></a>`;
}

function getData() {
    fetch('https://www.reddit.com/r/popular.json')
    .then(resp => resp.json())
    .then(({data}) => {

        const postList = data.children;

        const posts = document.createElement('ul');

        postList.forEach(post => {
            posts.insertAdjacentHTML('beforeend', returnPost(
                post.data.url,
                post.data.title,
                post.data.score,
                post.data.author,
                post.data.num_comments
            ));   
        });
        output.appendChild(posts); 
    })
     .catch((err) => console.log('Error: ', err));  
}
getData();