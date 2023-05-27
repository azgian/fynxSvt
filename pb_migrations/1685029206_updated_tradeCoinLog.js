migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p77p5v5d8cs9njz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dh90pgpp",
    "name": "coinINfo",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n4lmjwn7",
    "name": "sellerInfo",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "37ggcsk6",
    "name": "buyerInfo",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p77p5v5d8cs9njz")

  // remove
  collection.schema.removeField("dh90pgpp")

  // remove
  collection.schema.removeField("n4lmjwn7")

  // remove
  collection.schema.removeField("37ggcsk6")

  return dao.saveCollection(collection)
})
