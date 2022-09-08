document.getElementById('button-search').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    console.log(inputFieldText);
    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${inputFieldText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data.docs))
})

const displayBook = books => {
    const cardHolder = document.getElementById('card-holder');
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Author Name: ${book.author_name}</p>
          <p>Publisher: ${book.publisher[0]}</p>
          <p>First Published: ${book.first_publish_year}</p>
        </div>
      </div>
        `;
        cardHolder.appendChild(div);
    })
}