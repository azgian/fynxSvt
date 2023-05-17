migrate((db) => {
  const collection = new Collection({
    "id": "b4a30jzyqy6hsz3",
    "created": "2023-05-04 18:44:47.828Z",
    "updated": "2023-05-04 18:44:47.828Z",
    "name": "sites",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zofl4wvv",
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
        "id": "ujowwee7",
        "name": "domain",
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
        "id": "c8irfk81",
        "name": "subdomain",
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
        "id": "3sujt0ph",
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
        "id": "h1m5pgao",
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
  const collection = dao.findCollectionByNameOrId("b4a30jzyqy6hsz3");

  return dao.deleteCollection(collection);
})
