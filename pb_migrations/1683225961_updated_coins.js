migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qvt0jiym",
    "name": "site",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "b4a30jzyqy6hsz3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th")

  // remove
  collection.schema.removeField("qvt0jiym")

  return dao.saveCollection(collection)
})
