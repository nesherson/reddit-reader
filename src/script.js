
let output = document.getElementById('output');

function append(parent, el) {
    return parent.appendChild(el);
}

function createNode(el) {
    return document.createElement(el);
}


//console.log(data.data.children[0].data.title)
function getData() {
    fetch('https://www.reddit.com/r/popular.json')
    .then(resp => resp.json())
    .then(data => {
        let posts = document.createElement('ul');
        
        data.data.children.forEach(post => {

            let newPost = createNode('li');

            let postLink = createNode('a');
            
            postLink.href = post.data.url;
            postLink.target = "_blank";

            let title = createNode('p');
            title.textContent = post.data.title;

            let score = createNode('span');
            score.textContent = `${post.data.score} pts`;

            let author = createNode('span');
            author.textContent = `by ${post.data.author}`

            let comments_num = createNode('span');
            comments_num.textContent = `${post.data.num_comments} comments`

            append(postLink, title);
            append(postLink, score);
            append(postLink, author);
            append(postLink, comments_num);
            append(newPost, postLink);
            append(posts, newPost)      
        })
        append(output, posts)
    })
}