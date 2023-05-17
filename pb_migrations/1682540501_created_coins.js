migrate((db) => {
  const collection = new Collection({
    "id": "3zhkmlr5spru0th",
    "created": "2023-04-26 20:21:41.376Z",
    "updated": "2023-04-26 20:21:41.376Z",
    "name": "coins",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e42hbhkh",
        "name": "logo",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "ezmjmzii",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mjhgtpbx",
        "name": "sub_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "o9snvrnf",
        "name": "info",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("3zhkmlr5spru0th");

  return dao.deleteCollection(collection);
})
