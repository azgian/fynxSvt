migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bcepw6of",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hknr0xpu",
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
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf")

  // remove
  collection.schema.removeField("bcepw6of")

  // remove
  collection.schema.removeField("hknr0xpu")

  return dao.saveCollection(collection)
})
