migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf")

  // remove
  collection.schema.removeField("u7avb40a")

  // remove
  collection.schema.removeField("vn3ekjsj")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u7avb40a",
    "name": "code",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vn3ekjsj",
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
