migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yilhz7ed",
    "name": "coinName",
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
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yilhz7ed",
    "name": "coinNAme",
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
