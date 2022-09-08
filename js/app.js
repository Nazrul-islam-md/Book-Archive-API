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
    books.forEach(book => {
        console.log(book.title);
    })
}