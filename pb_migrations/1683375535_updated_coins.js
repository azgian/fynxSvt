migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th")

  // remove
  collection.schema.removeField("mjhgtpbx")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mjhgtpbx",
    "name": "subName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
