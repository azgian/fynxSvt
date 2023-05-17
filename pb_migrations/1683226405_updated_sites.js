migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3")

  // remove
  collection.schema.removeField("h1m5pgao")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h1m5pgao",
    "name": "menus",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
