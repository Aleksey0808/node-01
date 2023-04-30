const contactsPath = require('./db')

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contactsPath.getAll()
    // return console.log(allContacts)
    case 'getById':
      const contactId = await contactsPath.getById(id)
      return console.log(contactId)
    case 'addContact':
    // const addContact =
  }
}

// invokeActions({ action: 'read' })
// invokeActions({ action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' })
invokeActions({
  action: 'addContact',
  id: 'AeHIrLTr6JkxGE6SN-5Se',
  name: 'Stephen King',
  email: 'stephenking@gmail.com',
  phone: '0675896627',
})
