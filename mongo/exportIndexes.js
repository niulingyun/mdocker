db.getCollectionNames().forEach(function (collection) {
    indexes = db[collection].getIndexes();
    print("Indexes for " + collection + ":");
    printjson(indexes);
});

db.getCollectionNames().forEach(function (collection) {
    indexes = db[collection].getIndexes();
    indexes.forEach(function (index) {
        print("db." + collection + ".createIndex(");
        printjson(index);
        print(")");
    });
});