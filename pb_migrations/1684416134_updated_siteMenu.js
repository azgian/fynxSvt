migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n60jmhwp",
    "name": "code",
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
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re")

  // remove
  collection.schema.removeField("n60jmhwp")

  return dao.saveCollection(collection)
})
