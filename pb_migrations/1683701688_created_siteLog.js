migrate((db) => {
  const collection = new Collection({
    "id": "m0eenz5d4gjmq8y",
    "created": "2023-05-10 06:54:48.254Z",
    "updated": "2023-05-10 06:54:48.254Z",
    "name": "siteLog",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "14u7wiur",
        "name": "site",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "b4a30jzyqy6hsz3",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "jq4huep0",
        "name": "sessionData",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("m0eenz5d4gjmq8y");

  return dao.deleteCollection(collection);
})
