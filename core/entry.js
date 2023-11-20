import express from 'express';
import process from './processor.js'
import connector from '../connector/index.js'

const app = express();

const msg_welcome = 'app listening on port 3000';
const endpoint = '/query';

export default {
    start: async () => {

console.log(connector._);
        await connector.init('mongodb');

        app.post(endpoint, (req, res) => {
            process(req, function(error_code) {
                res.json({error:error_code});
            });
            return true;
        });

        // app.get('*', (req, res) => res.json({}))
        app.listen(3000, () => console.log(msg_welcome));
    }
}