
let output = document.getElementById('output');

function append(parent, el) {
    return parent.appendChild(el);
}

function createNode(el) {
    return document.createElement(el);
}

function getData() {
    fetch('https://www.reddit.com/r/popular.json')
    .then(resp => resp.json())
    .then(({data}) => {

        const {children: postList} = data;

        let posts = document.createElement('ul');

        postList.forEach(post => {

            let newPost = createNode('li');

            let postLink = createNode('a');         
            postLink.href = post.data.url;
            postLink.target = "_blank";

            let title = createNode('p');
            title.textContent = post.data.title;
            append(postLink, title);

            let score = createNode('span');
            score.textContent = `${post.data.score} pts`;
            append(postLink, score);

            let author = createNode('span');
            author.textContent = `by ${post.data.author}`;
            append(postLink, author);

            let comments_num = createNode('span');
            comments_num.textContent = `${post.data.num_comments} comments`;
            append(postLink, comments_num);

            append(newPost, postLink);
            append(posts, newPost)      
        })
        append(output, posts)
    })
}