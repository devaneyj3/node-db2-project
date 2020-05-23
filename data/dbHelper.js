const db = require('./db-config');

    //get all entries from database
function getAll(database) {
    return db(database);
}

function insert(database, changes) {
    return db(database).insert(changes)
}

module.exports = {
    getAll,
    insert
}