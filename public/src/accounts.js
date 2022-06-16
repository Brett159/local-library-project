function findAccountById(accounts, id) {
 return accounts.find(account=>account.id == id)
}
function sortAccountsByLastName(accounts) {
  const sortedLastName = accounts.sort((accountA,accountB)=>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1:-1)
  return sortedLastName
}

function getTotalNumberOfBorrows(account, books) {
   const loopingBooks = books.reduce((book,result)=>books.id=result.borrows)
  return loopingBooks.length
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutByUser = [];
  for (let index in books) {
    if(!books[index].borrows[0].returned && books[index].borrows[0].id === account.id) {
      checkedOutByUser.push(books[index]);
    } 
  }
  checkedOutByUser.forEach((book) => {
    let author = authors.find((writer) => {
      if (book.authorId === writer.id) {
      return writer;
      }
    })
    book.author = author
  });
  return checkedOutByUser;
}  

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
