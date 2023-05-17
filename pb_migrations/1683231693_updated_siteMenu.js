migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iszhi2zg",
    "name": "active",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re")

  // remove
  collection.schema.removeField("iszhi2zg")

  return dao.saveCollection(collection)
})
