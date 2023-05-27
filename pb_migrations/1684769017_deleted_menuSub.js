migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cw272iyo5fe4maz");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "cw272iyo5fe4maz",
    "created": "2023-05-18 12:21:04.983Z",
    "updated": "2023-05-18 12:26:10.896Z",
    "name": "menuSub",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5skrq8kl",
        "name": "menu",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "03nzkh0ug3ln5yf",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
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
      },
      {
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
})
