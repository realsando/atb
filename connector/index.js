
import Schema from '../schema/index.js'
import mongodb from './mongo/mongo_main.js'

export default class Connector{
    
    static async init(type) {
        type ||= 'mongodb';
        switch(type.toLowerCase()){
            case 'mongodb': this._ = mongodb; break;
        }

        await this._.init();
        return this._;
    }

    static build(){

    }
}
