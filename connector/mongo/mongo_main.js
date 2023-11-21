import instance from './mongo_instance.js';
const db_name = 'test';

async function _init(tables){
    await instance().connect();
    /// TODO: handle connection errors / timeouts
    // db = 
}


export default {
    init: _init,
    db: instance().db(db_name),
    ping: () => instance().db(db_name).command({ ping: 1 }),
    listCollections: () => instance().db(db_name).listCollections({}).toArray(),
    // createCollection: (col, options) => instance().db(db_name).createCollection(col, options),
}