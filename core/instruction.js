import ERROR from './error.js';
import connector from '../connector/index.js';
import schema from '../schema/index.js';

const TIMEOUT = 3 *(60*1000);

export default class Instruction {

    static async query({collection,operation,args}, callback){

        if(!collection||!operation||args.length<1){
            callback(ERROR.missing_params);
            return;
        }

        if(!schema.isValidQuery(operation, collection, args)){
            callback(ERROR.invalid_operation);
            return;
        }

        /// TODO:
        /// Fields: check fields exists & respect schema constraints (incl. mandatory)

        /// TODO:
        /// Create access permission for user by collection/operations/fields

        const f_args = args.map(e=>JSON.stringify(e)).join(',');
        const result = await connector._.db.collection(collection)[operation](f_args);

        // call connector
        callback(ERROR.ok, result);
    }

    static isValid(method) {
        return Object.getOwnPropertyNames(Instruction)
            .filter(p => typeof Instruction[p] === 'function' && p !== 'isValid')
            .includes(method);
    }

    // static isPublic(method){
    //     return this.publicInstructions.includes(method);
    // }

    // static isAdmin(method){
    //     return this.adminInstructions.includes(method);
    // }

    // static isTimely(ts){
    //     return TIMEOUT < ( Date.now() - new Date(parseInt(ts)) );
    // }

}
