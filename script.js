const containers = document.querySelectorAll('.shelfSlot')
const button = document.querySelector('.newBookBtn')
var i = 0;
const bookArray = []
var totalBooks = 0;

button.addEventListener("click", function(){addBook()})

addBook(1,"fox",1233,"box","the fox in the box")
addBook(1,"box",1233,"fox","the box in the fox")
function addBook(inputPages,inputAuthor,inputDate,inputContent,inputTitle)
{
    

    const book = document.createElement("div")
    book.className = "book"
    //make it so the color gets transfered next
    book.style.backgroundColor = "rgb" + "(" + randomColorCreator() + "," + randomColorCreator() + "," + randomColorCreator() +")"
    containers[i].appendChild(book)
    if(containers[i].children.length === 9)
    {
        i+= 1;
    }
    curentBook = new bookMaker(totalBooks,inputPages,inputAuthor,inputDate,inputContent,inputTitle)
    bookArray[totalBooks] = curentBook;
    totalBooks++
    book.addEventListener("click",function(){bookShowCover(bookArray[findSpotInParent(book)])})

    function findSpotInParent(element)
    {
      return Array.from(element.parentNode.children).indexOf(element)
    }
    

}
function randomColorCreator()
{

  return String(Math.floor(Math.random() * 255));

}

function bookMaker(testnr,bookPageCount,bookAuthor,bookDate,bookContent,bookTitle)
{
  this.bookPageCount = bookPageCount
  this.bookAuthor = bookAuthor
  this.bookDate = bookDate
  this.bookContent = bookContent
  this.bookTitle = bookTitle
}

function bookShowCover(book)
{

  const bookCover = document.createElement("div")
  bookCover.className = "bookCover"

  const content = document.createElement("div")
  content.className = "content"
  bookCover.appendChild(content);

  const title = document.createElement("div")
  title.className = "title"
  title.textContent = book.bookTitle
  content.appendChild(title);

  const author = document.createElement("div")
  author.className = "author"
  author.textContent = book.bookAuthor
  content.appendChild(author);

  for(var i = 0; i < 4;i++)
  {
    const page = document.createElement("div")
    page.className = "page"
    bookCover.appendChild(page)

  }
  document.body.appendChild(bookCover)
}