const containers = document.querySelectorAll('.shelfSlot')
const button = document.querySelector('.newBookBtn')
var i = 0;
const bookArray = []
var totalBooks = 0;

button.addEventListener("click", function(){addBook()})

function addBook(inputPages,inputAuthor,inputDate,inputContent,inputTitle)
{
    

    const book = document.createElement("div")
    book.className = "book"
    var color = "rgb" + "(" + randomColorCreator() + "," + randomColorCreator() + "," + randomColorCreator() +")"
    book.style.backgroundColor = color
    containers[i].appendChild(book)
    if(containers[i].children.length === 9)
    {
        i+= 1;
    }
    curentBook = new bookMaker(inputPages,inputAuthor,inputDate,inputContent,inputTitle,color)
    bookArray[totalBooks] = curentBook;
    totalBooks++
    book.addEventListener("click",function(){bookShowCover(bookArray[findSpotInParent(book)])})

   
    

}
//changed from up to down here
function findSpotInParent(element)
{
  return Array.from(element.parentNode.children).indexOf(element)
}
function randomColorCreator()
{

  return String(Math.floor(Math.random() * 255));

}

function bookMaker(bookPageCount,bookAuthor,bookDate,bookContent,bookTitle,color)
{
  this.bookPageCount = bookPageCount
  this.bookAuthor = bookAuthor
  this.bookDate = bookDate
  this.bookContent = bookContent
  this.bookTitle = bookTitle
  this.color = color;
}

addBook(1,"afox",1234,"greetings, it is i the fox who is in the box, now what you don't know is that i actually dont have a box, the taxmen took it","the story of a fox")

function bookShowCover(book)
{

  const bookCover = document.createElement("div")
  bookCover.className = "bookCover"
  bookCover.style.backgroundColor = book.color

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
    page.addEventListener("click",function(){bookShowOpen(book)})
    bookCover.appendChild(page)

  }
  document.body.appendChild(bookCover)
}

function bookShowOpen(book)
{
  const openBook = document.createElement("div")
  openBook.className = "openBook";
  openBook.style.backgroundColor = book.color
  const openPage1 = document.createElement("div")
  openPage1.classList.add("openPage","left")
  openBook.appendChild(openPage1)
  const textZone1 = document.createElement("div")
  textZone1.className = "textZone"
  textZone1.textContent = book.bookContent;
  openPage1.appendChild(textZone1)
  const openPage2 = document.createElement("div")
  openPage2.classList.add("openPage","right")
  openBook.appendChild(openPage2)
  const textZone2 = document.createElement("div")
  textZone2.className = "textZone"
  openPage2.appendChild(textZone2)

  document.body.appendChild(openBook)
}