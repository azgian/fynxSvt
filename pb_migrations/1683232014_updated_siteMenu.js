migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9ur3oava",
    "name": "_name",
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
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re")

  // remove
  collection.schema.removeField("9ur3oava")

  return dao.saveCollection(collection)
})
