migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d61uykt6",
    "name": "menus",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iwkrvo2s",
    "name": "coins",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3")

  // remove
  collection.schema.removeField("d61uykt6")

  // remove
  collection.schema.removeField("iwkrvo2s")

  return dao.saveCollection(collection)
})
