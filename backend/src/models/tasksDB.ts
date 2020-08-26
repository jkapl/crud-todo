// import { MongoClient } from 'mongodb';

// const uri = 'mongodb://localhost:27017/'

// const client = new MongoClient(uri);

// module.exports = {
//     connection: async function () {
//         try {
//             await client.connect();
    
//             const database = client.db('task_app');
//             const collection = database.collection('userTasks');
//         } finally {
    
//         }
//     }
// }

// async function connect () {
//     await client.connect();

//     const database = client.db('task_app');
//     const collection = database.collection('users');

//     return collection
// }

// const db = await connect()

// export default db



// export default async function run() {
//     try {
//         await client.connect();

//         const database = client.db('task_app');
//         const collection = database.collection('users');

//         const query = { username: 'Joel'}
//         const result = await collection.findOne(query)
//         console.log(result)
//     } finally {

//     }
// }

// run().catch(console.dir);