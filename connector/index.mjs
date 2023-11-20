
import Schema from '../schema/index.mjs'
import mongodb from './mongo/mongo_main.mjs'

export default class Connector{
    
    static init(type) {
        switch(type.toLowerCase()){
            case 'mongodb': this._ = mongodb; break;
        }

        return this._;
    }

    static build(){

    }
}
