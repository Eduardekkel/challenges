interface Contact {
    id: number
    name: string
    email: string
    phone: string
}
let adressBook: Contact[] = []

function addContact(contact: Contact): void{
    const existingId = adressBook.find()
    if (!contact.id)
}