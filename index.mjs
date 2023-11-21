import entry from './core/entry.js';

const conn_type = 'mongodb';
const error_msg = 'could not initialized';
/**/
const _schema = [
    {
        name:'system',
        fields: [
            {name:'name', type:'text', mandatory:true},
            {name:'airport', type:'text', mandatory:true},
            {name:'department', type:'text', mandatory:true},
        ]
    },
    {
        name: 'contract',
        fields: [
            {name:'name', type:'text', mandatory:true},
            {name:'vendor', type:'text', mandatory:true},
            {name:'price', type:'number', mandatory:false},
        ]
    }
]
/**/

entry.start(_schema, conn_type)
    .catch((err)=>{console.error(`${error_msg}: ${err}`)})
    .finally(()=>{});
