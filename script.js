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

    /*myLibrary.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        

        card.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.author}</p>
            <p>${item.pages}</p>
            <p>${item.read}</p>
        `;

        container.appendChild(card);
    });*/
    
    /*myLibrary.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML += `
            <table>
                <tbody>
                    <th>${item.title}</th>
                    <td>${item.author}</td>
                    <td>${item.pages}</td>
                    <td>${item.read}</td>
                </tbody>
            </table>
        `;
        container.appendChild(card);
    });*/

    myLibrary.forEach(item => {
        const tb = document.createElement("tbody");


        tb.innerHTML = `
            <th>${item.title}</th>
            <td>${item.author}</td>
            <td>${item.pages}</td>
            <td>${item.read}</td>
        `;
        tblContainer.appendChild(tb);   
    
    });
    
}



function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBook();
}
