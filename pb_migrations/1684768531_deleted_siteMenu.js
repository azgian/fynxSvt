migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i5fu6wcttit65re");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "i5fu6wcttit65re",
    "created": "2023-05-04 20:17:58.690Z",
    "updated": "2023-05-18 13:22:14.764Z",
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
        "id": "twvxtr9z",
        "name": "menuSub",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "cw272iyo5fe4maz",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "n60jmhwp",
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
        "id": "iszhi2zg",
        "name": "active",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "9ur3oava",
        "name": "_name",
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
        "id": "q4hfhyyo",
        "name": "_icon",
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
