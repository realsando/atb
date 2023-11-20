import instance from './mongo_instance.js'

async function _init(tables){
    var res = await instance().connect();
    /// TODO: handle connection errors / timeouts
    return res;
}


export default {
    // find: () => instance,
    ping: () => instance().db('admin').command({ ping: 1 }),
    init: _init,
}