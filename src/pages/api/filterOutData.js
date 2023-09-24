// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';
export default async function filterOutData(req, res) {
  const url = process.env.MONGO_URL;
  const client = new MongoClient(url);
  const db = client.db('projectData');
  const projectsDataCollection = db.collection('datas');

  const projectsData = await projectsDataCollection.find({}).toArray();

  // console.log('projectsData:: ', projectsData);

  client.close();
  res.status(200).json(projectsData)
}
