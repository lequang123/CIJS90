let contacts = [];

function addContact() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;

    if (name && number) {
        const contact = { name, number };
        contacts.push(contact);
        updateDisplayedContacts();
        clearForm();
    }
}

function displayContacts(filteredContacts = contacts) {
    const tableBody = document.getElementById("contactListBody");
    tableBody.innerHTML = "";

    filteredContacts.forEach(contact => {
        const row = tableBody.insertRow();
        const cellName = row.insertCell(0);
        const cellNumber = row.insertCell(1);

        cellName.innerHTML = contact.name;
        cellNumber.innerHTML = contact.number;
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
}

function searchContacts() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm) ||
        contact.number.toLowerCase().includes(searchTerm)
    );
}

function updateDisplayedContacts() {
    const filteredContacts = searchContacts();
    displayContacts(filteredContacts);
}

function removeDuplicates() {
    const uniqueContacts = contacts.filter((contact, index, self) =>
        index === self.findIndex(c => c.name === contact.name && c.number === contact.number)
    );
    contacts = uniqueContacts;
    updateDisplayedContacts();
}

// Initial display
displayContacts();