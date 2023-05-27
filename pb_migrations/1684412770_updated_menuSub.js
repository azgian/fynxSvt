migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cw272iyo5fe4maz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2bvxvuss",
    "name": "slug",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "enqw9d3h",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("cw272iyo5fe4maz")

  // remove
  collection.schema.removeField("2bvxvuss")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "enqw9d3h",
    "name": "subName",
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
})
