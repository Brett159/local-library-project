function getTotalBooksCount(books) {
  return books ? books.length : null
}

function getTotalAccountsCount(accounts) {
  return accounts ? accounts.length : null
}

function getBooksBorrowedCount(books) {
  return books.filter(book=>book.borrows[0].returned === false).length
}

function getMostCommonGenres (books) {
	let genres = books.reduce((total, book) => {
		total[book.genre] != null
			? total[book.genre].count++
			: total[book.genre] = { name: book.genre, count: 1 }
		return total
	}, {})
	return Object.keys(genres)
		.map(genre => genres[genre])
		.sort((a,b) => b.count - a.count)
		.slice(0,5)
}
function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((a, b) => b.count - a.count).splice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const authArray = [];
  authors.forEach((author) => {
    const byThisAuthor = books.filter((book) => book.authorId === author.id);
    let totalBorrows = 0;
    byThisAuthor.forEach((book) => (totalBorrows += book.borrows.length));
    authArray.push({
      name: author.name.first + " " +author.name.last,
      count: totalBorrows,
    });
  });
  authArray.sort((a, b) => (a.count < b.count ? 1 : -1))
  authArray.length = 5;
  return authArray;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
