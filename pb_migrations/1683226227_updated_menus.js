migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf")

  // remove
  collection.schema.removeField("cpncclmc")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cpncclmc",
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
})
