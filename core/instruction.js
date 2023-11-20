import ERROR from './error.js';

const TIMEOUT = 3 *(60*1000)

export default class Instruction {

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

