function getTheTitles(books) {
const titulos = books.map(book => book.title);
console.log(titulos);
return titulos
}


getTheTitles([
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }, 
    {
        title: 'Book3',
        author: 'Name3'
      }
  ]
  );