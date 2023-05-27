migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twvxtr9z",
    "name": "menuSub",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "cw272iyo5fe4maz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re")

  // remove
  collection.schema.removeField("twvxtr9z")

  return dao.saveCollection(collection)
})
