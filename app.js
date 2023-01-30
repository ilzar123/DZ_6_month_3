//1

const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const prev = document.querySelector('.btn-prev')
let num = 1;

const request = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
        })
};
request()
btn.onclick = () => {
    num++;
    request();
};
prev.onclick = () => {
    num !== 1 && num--;
    request();
};


//2

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((json) => console.log(json))