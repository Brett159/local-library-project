function findAuthorById(authors, id) {
  const matchingAuthorId = authors.find(author=>author.id === id);
  return matchingAuthorId
}

function findBookById(books, id) {
  const matchingbookId = books.find(book=>book.id === id);
  return matchingbookId}

function partitionBooksByBorrowedStatus(books) {
   const booksReturnedArray = books.filter(book=>{if(book.borrows[0].returned) 
    return book })   
    const booksNotReturnedArray = books.filter(book=>{if(!book.borrows[0].returned)
      return book})
    return [booksNotReturnedArray, booksReturnedArray]
  }

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id)
    account.returned = borrow.returned
    return account
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
