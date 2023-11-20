import ERROR from './error.js';
import connector from '../connector/index.js';

const TIMEOUT = 3 *(60*1000)

export default class Instruction {

    static async query({collection,operation,args}, callback){

        if(!collection||!operation||args.length<1){
            callback(ERROR.invalid_operation);
            return;
        }

        /// TODO:
        /// check schema constraints
        /// the collection exists
        /// all the fields exists
        /// all the mandatory fields (if create)
        /// access permission check: user <-> schema

        const q_string = `db.${collection}.(${args.join(',')})`;


        console.log( await connector._.ping() );

        // call connector
        callback(ERROR.ok)
    }

    static isValid(method) {
        return Object.getOwnPropertyNames(Instruction)
            .filter(p => typeof Instruction[p] === 'function' && p !== 'isValid')
            .includes(method)
    }

    static isPublic(method){
        return this.publicInstructions.includes(method)
    }

    static isAdmin(method){
        return this.adminInstructions.includes(method)
    }

    static isTimely(ts){
        return TIMEOUT < ( Date.now() - new Date(parseInt(ts)) )
    }

}

