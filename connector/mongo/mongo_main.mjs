import instance from './mongo_instance.mjs'

async function _init(tables){
    await instance().connect();
    // for(let i in tables){
    //     let e = tables[i];
        

    //     console.log(i)
    //     console.log(tables[i])
    // }
}

export default {
    connect: () => instance().connect(),
    ping: () => instance().db('admin').command({ ping: 1 }),
    init: _init,
}