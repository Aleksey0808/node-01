const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const { program } = require('commander')

const contactsPath = require('./contacts.js')

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contactsPath.getAll()
      return console.log(allContacts)
    case 'getById':
      const contactId = await contactsPath.getById(id)
      return console.log(contactId)
    case 'addContact':
      const addContact = await contactsPath.addContact({ name, email, phone })
      return console.log(addContact)
    case 'updateContact':
      const updateContactById = await contactsPath.updateContact(id, {
        name,
        email,
        phone,
      })
      return console.log(updateContactById)
    case 'deleteContact':
      const deleteContactById = await contactsPath.deleteContact(id)
      return console.log(deleteContactById)
    default:
      return console.log('Unknow action')
  }
}

// invokeActions({ action: 'read' })
// invokeActions({ action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' })
// invokeActions({
//   action: 'addContact',
//   name: 'Stephen King',
//   email: 'stephenking@gmail.com',
//   phone: '0675896627',
// })
// invokeActions({ action: 'updateContact',
//   id: '793DZxqEqo_JYmgUtxqiw',
//   name: 'Stephen Ning',
//   email: 'stephenking@gmail.com',
//   phone: '0675896627', })
// invokeActions({ action: 'deleteContact', id: 'rsKkOQUi80UsgVPCcLZZW',})

// const actionIndex = process.argv.indexOf('--action');
// if(actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeActions({action});
//   console.log(action);
// }

// const arr = hideBin(process.argv)
// const {argv} = yargs(arr)
// invokeActions(argv)

program.option('-a, --action, <type>')
program.option('-i, --id, <type>')
program.option('-n, --name, <type>')
program.option('-e, --email, <type>')
program.option('-p, --phone, <type>')

program.parse()

const options = program.opts()
invokeActions(options)
