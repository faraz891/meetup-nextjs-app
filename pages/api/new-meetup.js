import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, inage, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://Mamali:Msz10361@cluster0.s6olj.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;