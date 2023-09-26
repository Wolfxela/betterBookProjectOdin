const containers = document.querySelectorAll('.shelfSlot')
const button = document.querySelector('.newBookBtn')
const submitBtn = document.querySelector('.submitBtn')
const bookForm = document.querySelector('.bookForm')
const formAuthor = document.querySelector('.input_author')
const formTitle = document.querySelector('.input_title')
const formContent = document.querySelector('.input_Content')
var i = 0;
const bookArray = []
var totalBooks = 0;

button.addEventListener("click", function(){bookForm.style.display = "flex"})
submitBtn.addEventListener("click",function()
{
  if(formAuthor.checkValidity() == true && formTitle.checkValidity() == true)
  {
    addBook(formAuthor.value,formContent.value,formTitle.value)
    formAuthor.value = "";
    formTitle.value = ""
    formContent.value = ""
    bookForm.style.display = "none"
  }
  
  
})

function addBook(inputAuthor,inputContent,inputTitle)
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
    curentBook = new bookMaker(inputAuthor,inputContent,inputTitle,color)
    bookArray[totalBooks] = curentBook;
    totalBooks++
    book.addEventListener("click",function(){bookShowCover(bookArray[findSpotInParent(book)+(9* findSpotInParent(book.parentElement))])})

   
    

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
class bookMaker
{
  constructor(bookAuthor,bookContent,bookTitle,color)
  {
    this.bookAuthor = bookAuthor
    this.bookContent = bookContent
    this.bookTitle = bookTitle
    this.color = color;
  }
}
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
    page.addEventListener("click",function(){bookShowOpen(book); bookCover.remove()})
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
  openPage1.appendChild(textZone1)

  const openPage2 = document.createElement("div")
  openPage2.classList.add("openPage","right")
  openBook.appendChild(openPage2)

  const textZone2 = document.createElement("div")
  textZone2.className = "textZone"
  
  if(book.bookContent.length < 300)
  {
    textZone1.textContent = book.bookContent;
  }
  if(book.bookContent.length >= 300)
  {
    var text1 = "";
    var text2 = "";
    const chars = book.bookContent.split('')
    for(var i = 0; i < 300; i++)
    {
      text1 += chars[i]
    }
    textZone1.textContent = text1;
    for(var i = 300; i < book.bookContent.length; i++ )
    {
      text2 += chars[i]
    }
    textZone2.textContent = text2;
  }
  openPage2.appendChild(textZone2)

  openBook.addEventListener("click", function(){openBook.remove()})

  document.body.appendChild(openBook)
}