migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke")

  // remove
  collection.schema.removeField("puulevse")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "puulevse",
    "name": "coin",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "3zhkmlr5spru0th",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("yilhz7ed")

  return dao.saveCollection(collection)
})
