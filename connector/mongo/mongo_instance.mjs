import { MongoClient, ServerApiVersion } from 'mongodb';

const user = {login:'admin', password:'Kap123'};
const uri = `mongodb+srv://${user.login}:${user.password}@cluster0.0jtoprd.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

function isConnected(){
  return !!client && !!client.topology && client.topology.isConnected();
}

function instance(){
    return client
};

export default instance;