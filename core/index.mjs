
import Schema from '../schema/index.mjs';
import express from 'express';
const app = express();

const endpoint = '/message'

// POST

/*
{
    user:{

    },
    query: {
        // db: 
        // collection:
        // operation:
        // find_object:
        // update_object:
    }

}
*/


function _process(body){

}

export default class Api {
    
    static build(){
        Schema.tables.forEach( t => {
            // make sure table exist if not create them
        })
    }

    static start(){

        app.post(endpoint, (req, res) => {
            _process()

            /// TODO:
            /// check schema constraints
            /// the collection exists
            /// all the fields exists
            /// all the mandatory fields (if create)
            /// access permission check: user <-> schema

            // check schema 
            res.json({error:'OK'})
        })
        app.listen(3000, () =>
            console.log('Example app listening on port 3000!')
        );
    }
};

