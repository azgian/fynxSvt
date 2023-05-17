migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "puulevse",
    "name": "field",
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

  return dao.saveCollection(collection)
})
