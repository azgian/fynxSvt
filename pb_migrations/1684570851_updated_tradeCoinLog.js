migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p77p5v5d8cs9njz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "op8qdhzc",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "sell",
        "buy"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p77p5v5d8cs9njz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "op8qdhzc",
    "name": "sort",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "sell",
        "buy"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
