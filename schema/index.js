import ERROR from '../core/error.js';
import connector from '../connector/index.js';

var schema;

export default class Schema{
    static init(_schema){
        var that = this;

        return new Promise( async (resolve, reject) => {
            schema = _schema;    

            var cols = (await connector._.listCollections()).map(e => e.name);
            that.getCollections().forEach((col) => {
                if(!cols.includes(col)){
                    reject(ERROR.unset_collection);
                }
            });

            /// TODO: prepare params, types and constraints

            resolve(true);
        });
    }

    static isValidQuery(operation, collection, args){
        var valid = true;
        // check the collection exists in schema
        console.log(operation, collection, args)
        valid &&=  this.getCollections().includes(collection);
        return valid;
    }

    static getSchema(){
        return schema;
    }

    static getCollection(name){
        schema.find(c => c.name == name);
    }

    static getCollections(){
        return schema.map(c => c.name);
    }
}