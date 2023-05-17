migrate((db) => {
  const collection = new Collection({
    "id": "6hj7hi1xbumfhke",
    "created": "2023-05-04 15:16:56.807Z",
    "updated": "2023-05-04 15:16:56.807Z",
    "name": "coinsPrice",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "puulevse",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "3zhkmlr5spru0th",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "6ipsskoy",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke");

  return dao.deleteCollection(collection);
})
