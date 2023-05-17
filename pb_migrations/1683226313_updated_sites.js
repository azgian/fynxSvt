migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3")

  // update
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h1m5pgao",
    "name": "menu",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
