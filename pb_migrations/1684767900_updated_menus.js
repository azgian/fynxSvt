migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rfrg294n",
    "name": "code",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mkcl1ixf",
    "name": "active",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf")

  // remove
  collection.schema.removeField("rfrg294n")

  // remove
  collection.schema.removeField("mkcl1ixf")

  return dao.saveCollection(collection)
})
