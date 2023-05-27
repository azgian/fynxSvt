migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0aoqhqujxl2pgk9");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0aoqhqujxl2pgk9",
    "created": "2023-05-04 20:21:15.101Z",
    "updated": "2023-05-07 07:15:10.905Z",
    "name": "siteCoins",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "thdyhbef",
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
        "id": "vevwtedy",
        "name": "coin",
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
        "id": "btixon4u",
        "name": "price",
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
        "id": "ue3j2ebn",
        "name": "sellFee",
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
        "id": "bsribllq",
        "name": "buyFee",
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
        "id": "jdhw5ekz",
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
        "id": "naaj4pb9",
        "name": "active",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
