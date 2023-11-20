
var _schema = [
    {
        name: 'contract',
        fields: [
            {name:'name', type:'text', mandatory:true},
            {name:'vendor', type:'text', mandatory:true},
            {name:'price', type:'number', mandatory:false}
        ]
    }
]


// sample
var query = {
    collection: '<name of collection>',
    operation: 'find',
    parameters: []
}