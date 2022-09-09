document.getElementById('button-search').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${inputFieldText}`;
    // display spinner
    document.getElementById('spinner').style.display = 'block';
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data))
    // .catch(error => console.log('Please insert a valid word'))
})

const displayBook = data => {
    const totalData = document.getElementById('total-data');
    totalData.innerText = `Total Data Found: ${data.numFound}`;
    const books = data.docs;
    const cardHolder = document.getElementById('card-holder');
    cardHolder.textContent = '';
    books.forEach(book => {
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${imgUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Author Name: ${book.author_name}</p>
          <p>Publisher: ${book.publisher[0]}</p>
          <p>First Published: ${book.first_publish_year}</p>
        </div>
      </div>
        `;
        // undisplaying spinner
        document.getElementById('spinner').style.display = 'none';
        cardHolder.appendChild(div);

    })
}