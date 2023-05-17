migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke")

  collection.name = "coinPriceLog"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6hj7hi1xbumfhke")

  collection.name = "coinsPrice"

  return dao.saveCollection(collection)
})
