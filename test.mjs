// import Connector from './connector/index.mjs'
import Entry from './core/entry.js'
// import Schema from './schema/index.mjs'

var _tags = [
    {
        name: 'contract',
        fields: [
            {name:'name', type:'text', mandatory:true},
            {name:'vendor', type:'text', mandatory:true},
            {name:'price', type:'number', mandatory:false}
        ]
    }
]

async function main(tags){

    Entry.start();

    // Schema.init(tags);
    
    // Connector.init('mongodb');

    // Api.build();
    // Api.start();

}

main(_tags)