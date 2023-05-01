const fs = require('fs/promises')
const path = require('path')
const { nanoid } = require('nanoid')

const contactPath = path.join(__dirname, './db/contacts.json')

const getAll = async () => {
  const data = await fs.readFile(contactPath)
  return JSON.parse(data)
}

const getById = async (id) => {
  const contactId = String(id)
  const contacts = await getAll()
  const result = contacts.find((contact) => contact.id === contactId)
  return result || null
}

const addContact = async (data) => {
  const contacts = await getAll()
  const newContact = {
    id: nanoid(),
    ...data,
  }
  contacts.push(newContact)
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2))
  return newContact
}

const updateContact = async (id, date) => {
  const contactId = String(id)
  const contacts = await getAll()
  const index = contacts.findIndex((item) => item.id === id)
  if (index === -1) {
    return null
  }
  contacts[index] = { id, ...date }
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2))
  return contacts[index]
}

const deleteContact = async (id) => {
  const contactId = String(id)
  const contacts = await getAll()
  const index = contacts.findIndex((item) => item.id === id)
  if (index === -1) {
    return null
  }
  const [result] = contacts.splice(index, 1)
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2))
  return result
}

module.exports = {
  getAll,
  getById,
  addContact,
  updateContact,
  deleteContact,
}
