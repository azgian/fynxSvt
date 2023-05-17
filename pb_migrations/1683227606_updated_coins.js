migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th")

  // remove
  collection.schema.removeField("o9snvrnf")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o9snvrnf",
    "name": "info",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
