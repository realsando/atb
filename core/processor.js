import Instruction from './instruction.js';
import ERROR from './error.js';
// const {certif} = require('./utils')
// const {Keypair} = require('./classes')

export default async (request, callback) => {


    // Retrieve request parameters
    try{
        var params = {
            instruction: request.query?.instruction,
            payload: request.query?.payload,
            // certif: request.body?.certif,
            // timestamp: request.body?.timestamp
        };
        if(Object.keys(params).filter(v=> !params[v]).length > 0) throw ERROR.invalid_request;
    }catch(_){
        callback(_);
        return;
    }

    // Verify parameters
    if(!(params.instruction && Instruction.isValid(params.instruction))){
        callback(ERROR.invalid_instruction);
        return;
    }

    // Verify access right
    /// TODO

    // call the instruction
    try{
        Instruction[params.instruction](params, callback)
    }catch(_){
        callback(ERROR.invalid_signature);
        return
    }

}