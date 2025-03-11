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

function removeBook(rowID) {
    const row = document.getElementById(rowID);
    row.parentNode.removeChild(row);
}

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
            <td>
                <button class="remove" data-id="${item.id}">Remove</button>
                <button class="toggle" data-id="${item.id}">Toggle</button>
            </td>
        `;
        //HOw would buttoon classed be called? Add to eventlistener?
        tblContainer.appendChild(tableRow);   
    
    });
    
}


function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBook();
}

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("remove")) {
        console.log("remove clicked");
        console.log(event.target.dataset.id);
        deleteBook(event.target.dataset.id);
    }
});

function deleteBook(id) {
    const bookIndex = myLibrary.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        console.log(myLibrary);
        displayBook();
    }
}

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("toggle")) {
        console.log("toggle clicked");
        console.log(event.target.dataset.id);
        toggleStatus(event.target.dataset.id);
    }
});

function toggleStatus(id) {
    const bookIndex = myLibrary.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
        myLibrary.forEach(item => {
            if (item.read === "Yes") {
                item.read = "No";
                displayBook();
                console.log(item.read);
            }
            else if (item.read === "No") {
                item.read = "Yes";
                displayBook();
                console.log(item.read);
            }
        });
    }
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
