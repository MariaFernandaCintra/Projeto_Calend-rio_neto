fetch('./json/livros.json')
    .then(res => res.json())
    .then(livros => {
        const tbody = document.querySelector('#tbody-livros');
        livros.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.id}</td>
                <td>${item.titulo}</td>
                <td>${item.autor}</td>
            `;
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao carregar JSON', error));
//https://jsonplaceholder.typicode.com/todos

fetch('https://www.freepublicapis.com/api/apis?limit=10&sort=best')
    .then(res => res.json())
    .then(item => {
        const tbody = document.querySelector('#tbody-externa');
        item.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.emoji}</td>
                <td>${item.title}</td>
                <td>${item.description}</td>
            `;
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao carregar JSON', error));