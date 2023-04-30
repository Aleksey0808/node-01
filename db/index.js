const fs = require('fs/promises')
const path = require('path')

const contactPath = path.join(__dirname, 'contacts.json')

const getAll = async () => {
  const data = await fs.readFile(contactPath)
  return JSON.parse(data)
}

const getById = async (id) => {
  const contacts = await getAll()
  const result = contacts.find((contact) => contact.id === id)
  return result || null
}

module.exports = {
  getAll,
  getById,
}
