import Instruction from './instruction.js';
import ERROR from './error.js';
// const {certif} = require('./utils')
// const {Keypair} = require('./classes')

export default async (request, callback) => {

    try{
        // var _instruction = request.body.instruction,
        //     _payload = request.body.payload,
        //     _certif = request.body.certif,
        //     _timestamp = request.body.timestamp,
        //     _bin = request.files?.bin

        // var params = _payload ? JSON.parse(_payload) : {}
        //     params.bin = _bin
        //     params.wire = request.body.wire
        //     params.timestamp = _timestamp
    }catch(_){
        callback({error: ERROR.invalid_request})
        return
    }

    // check message integrity
        /// TODO:
        /// check schema constraints
        /// the collection exists
        /// all the fields exists
        /// all the mandatory fields (if create)
    if(!(_instruction && Instruction.isValid(_instruction))){
        callback({error: ERROR.invalid_request})
        return
    }

    // check the user permission for the instruction
        /// access permission check: user <-> schema

    // call the instruction
    try{
        Instruction[_instruction](params, address, callback)
    }catch(_){
        callback({error: ERROR.invalid_signature, comment: _})
        return
    }


}