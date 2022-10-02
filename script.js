document.querySelector('p').addEventListener("click", addBook);
document.getElementById('submit').addEventListener("click", submit);

 let myLibrary = [];
let newArr = [];
function Book(title, author, pages, status){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = () => title + " by " + author + ", " + pages + " pages" + ", " + status;
}
function addBookToLibrary(title, author, pages, status){
 const book = new Book(title, author, pages, status);
 return book;
}
function addBook(){ 
  document.getElementById("form").style.display = "inline-block";
  document.getElementById("main").style.display = "none";
  document.getElementById("books").style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
 let read = document.getElementById("read").checked;
}
function submit(){
  document.getElementById("form").style.display = "none";
  document.getElementById("main").style.display = "inline-block";
  document.getElementById("books").style.display = "inline";
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
 let read = document.getElementById("read").checked;
 newArr.push(addBookToLibrary(title, author, pages, read));
 console.log(newArr[0].info());
 myLibrary.push(newArr[0]);
newArr = [];
 
 const bookTitle = document.createElement('p');
 bookTitle.innerHTML = title;
document.getElementById("books").appendChild(bookTitle);
const bookAuthor = document.createElement('p');
 bookAuthor.innerHTML = author;
document.getElementById("books").appendChild(bookAuthor);
const bookPages = document.createElement('p');
 bookPages.innerHTML = pages;
document.getElementById("books").appendChild(bookPages);
const complete = document.createElement('button');
//complete.id = "complete";
complete.classList.add("complete");
if(read){
  complete.innerHTML = "completed";
  document.getElementById("books").appendChild(complete);
  
} else{
  complete.innerHTML = "Not read yet";
 document.getElementById("books").appendChild(complete);
}
//console.log(complete);
 complete.addEventListener("click", ()=>{
   let titleText = bookTitle.innerText;
  for(let i = 0; i < myLibrary.length; i++){
    if(titleText === myLibrary[i].title){
      let text = complete.innerText;
      if(text === "completed"){
    text = "Not read yet";
    complete.innerText = text;
  } else{
    text = "completed";
    complete.innerText = text;
  } //console.log(i);
    //console.log(text);
    }
  }
 });
 const remove = document.createElement('button');
remove.classList.add("remove");
remove.innerHTML = "remove";
document.getElementById("books").appendChild(remove);
 remove.addEventListener("click", ()=>{
   let titleText = bookTitle.innerText;
  for(let i = 0; i < myLibrary.length; i++){
    if(titleText === myLibrary[i].title){
      myLibrary.splice(i, 1);
     bookTitle.remove();
     bookAuthor.remove();
     bookPages.remove();
     complete.remove();
     remove.remove();
    }
  }
 });
}