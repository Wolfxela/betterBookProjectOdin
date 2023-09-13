const containers = document.querySelectorAll('.shelfSlot')
const button = document.querySelector('.newBookBtn')
var i = 0;
console.log(containers);
button.addEventListener("click", function(){addBook()})
function addBook()
{
    

    const book = document.createElement("div")
    book.className = "book"
    book.style.backgroundColor = "rgb" + "(" + randomColorCreator() + "," + randomColorCreator() + "," + randomColorCreator() +")";
    containers[i].appendChild(book)
    if(containers[i].children.length === 9)
    {
        i+= 1;
    }
    

}
function randomColorCreator()
{

  return String(Math.floor(Math.random() * 255));

}