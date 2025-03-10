const myLibrary = [];

function Book (title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const container = document.querySelector("#container");

function displayBook() {
    container.innerHTML = '';
    const tblContainer = document.querySelector("#tbl-container");
    tblContainer.innerHTML = '';

    const bookRows = tblContainer.querySelectorAll("tr.book-row");
    bookRows.forEach(row => row.remove);
    myLibrary.forEach(item => {
        const tableRow = document.createElement("tr");
        tableRow.className = "book-row"
        tableRow.innerHTML = `
            <td>${item.title}</th>
            <td>${item.author}</td>
            <td>${item.pages}</td>
            <td>${item.read}</td>
        `;
        tblContainer.appendChild(tableRow);   
    
    });
    
}


function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBook();
}

const newBookBtn = document.getElementById("newBook");
const bookDialog = document.getElementById("bookDialog");
const confirmBtn = bookDialog.querySelector("#confirmBtn");


newBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    if (title && author) {
        addBookToLibrary(title, author, pages, read);

        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("read").value = "";
    }
    else {
        alert("Please provide at least a title and author")
    }
});