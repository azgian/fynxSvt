migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g2lhdf0c",
    "name": "active",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3")

  // remove
  collection.schema.removeField("g2lhdf0c")

  return dao.saveCollection(collection)
})
