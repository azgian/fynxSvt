migrate((db) => {
  const collection = new Collection({
    "id": "i5fu6wcttit65re",
    "created": "2023-05-04 20:17:58.690Z",
    "updated": "2023-05-04 20:17:58.690Z",
    "name": "siteMenu",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rlfso3pp",
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
        "id": "okvndc4h",
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
        "id": "yudxwyzj",
        "name": "code",
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
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re");

  return dao.deleteCollection(collection);
})
