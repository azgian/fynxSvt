migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mjhgtpbx",
    "name": "apiName",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mjhgtpbx",
    "name": "sub_name",
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
