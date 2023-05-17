migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0aoqhqujxl2pgk9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btixon4u",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0aoqhqujxl2pgk9")

  // remove
  collection.schema.removeField("btixon4u")

  return dao.saveCollection(collection)
})
