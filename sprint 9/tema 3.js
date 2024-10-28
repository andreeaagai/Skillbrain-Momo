function showBooksList(bookList) {
  for (let book of bookList) {
    if (book.isRead) {
      console.log("You`ve already read " + book.title + " de " + book.autor + "."); 
    } else {
      console.log("You must read " + book.title + " de " + book.autor + "."); 
    }
  }
}
const bookList = [
  { title: "Hobbitul", 
    autor: "J.R.R. Tolkien", 
    isRead: false
  },
  { title: "Domina", 
    autor: "L.S. Hilton", 
    isRead: true
  }
]
showBooksList(bookList);
  
