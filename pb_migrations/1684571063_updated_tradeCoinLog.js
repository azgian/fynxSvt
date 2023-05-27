migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p77p5v5d8cs9njz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "op8qdhzc",
    "name": "req_type",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmugnqxi",
    "name": "req_option",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "all",
        "part"
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmugnqxi",
    "name": "size",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "all",
        "part"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
