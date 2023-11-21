import Instruction from './instruction.js';
import ERROR from './error.js';
// const {certif} = require('./utils')
// const {Keypair} = require('./classes')

export default async (request, callback) => {

    // Retrieve request parameters
    try{
        var _ = {
            instruction: request.query?.instruction,
            payload: JSON.parse(request.query?.payload),
            // certif: request.body?.certif,
            // timestamp: request.body?.timestamp
        };
        if(Object.keys(_).filter(v=> !_[v]).length) throw '';
    }catch(e){
        callback(ERROR.invalid_request);
        return;
    }

    // Verify parameters
    if(!(_.instruction && Instruction.isValid(_.instruction))){
        callback(ERROR.invalid_instruction);
        return;
    }

    // Verify access right
    /// TODO

    // call the instruction
    try{
        Instruction[_.instruction](_.payload, callback)
    }catch(_){
        callback(ERROR.invalid_signature);
        return
    }

}