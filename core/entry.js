import express from 'express';
import processor from './processor.js'

const app = express();

export default {
    start: () => {
        app.post( '/message', (request, resolve) => {
            
            ///////// CHECK BACK HERE
            processor.process(request, function(result) {
                resolve.json(result)
            })
            return true
        });

        app.listen(3000, () =>
            console.log('Example app listening on port 3000!')
        );
    }
}