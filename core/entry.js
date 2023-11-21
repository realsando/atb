import express from 'express';
import process from './processor.js';
import connector from '../connector/index.js';
import schema from '../schema/index.js';

const app = express();

const port = 3000;
const msg_welcome = `[STARTED] listening on port ${port}`;
const endpoint = '/query';

export default {
    start: async (_schema, conn_type) => {

        try{
            await connector.init();
            await schema.init(_schema);
        }catch(_){
            throw _;
        }

        app.post(endpoint, (req, res) => {
            process(req, function(error_code, _payload) {
                res.json({error:error_code, payload:_payload});
            });
            return true;
        });

        // app.get('*', (req, res) => res.json({})) // default route
        app.listen(port, () => console.log(msg_welcome));
    }
}