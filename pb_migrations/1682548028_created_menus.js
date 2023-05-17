migrate((db) => {
  const collection = new Collection({
    "id": "03nzkh0ug3ln5yf",
    "created": "2023-04-26 22:27:08.037Z",
    "updated": "2023-04-26 22:27:08.037Z",
    "name": "menus",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u7avb40a",
        "name": "code",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "tlcu7jnq",
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
        "id": "g0kzbaxb",
        "name": "slug",
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
  const collection = dao.findCollectionByNameOrId("03nzkh0ug3ln5yf");

  return dao.deleteCollection(collection);
})
