// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient, ServerApiVersion } from 'mongodb'
export default async function filterOutData(req, res) {
  const query = req.body;
  console.log('query:: ', query);
  if (req.method == 'POST') {
    const url = process.env.MONGO_URL;
    const client = new MongoClient(url, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    await client.db(process.env.ADMINDB).command({ ping: 1 });

    const db = client.db(process.env.DATABASE);
    const projectsDataCollection = db.collection(process.env.COLLECTION);

    // const parsedQuery = JSON.parse(query);

    // const filteredData = await projectsDataCollection.find({})

    const keywords = query?.split(/\s+/);

    console.log('keys:: ', keywords);

    const pipelineStages = [
      {
        '$match': {
          '$or': [
            {
              'Project.Technologies':
                { $regex: keywords.join("|"), $options:"i" }
            },
            {
              'Technical_Skillset.Frontend':
                { $regex: keywords.join("|"), $options:"i" }
            }, {
              'Technical_Skillset.Backend':
                { $regex: keywords.join("|"), $options:"i" }
            }, {
              'Technical_Skillset.Infrastructure':
                { $regex: keywords.join("|"), $options:"i" }
            }, {
              'Technical_Skillset.Databases':
                { $regex: keywords.join("|"), $options:"i" }
            },
          ]
        }
      },
    ];

    // Dynamically add stages for each keyword in the query
    // keywords.forEach((keyword) => {
    //   const stage = {
    //     $match: {
    //       'Project.Technical_Skillset.Frontend': { $regex: keyword },
    //       'Project.Technical_Skillset.Backend': { $regex: keyword },
    //       'Project.Technical_Skillset.Databases': { $regex: keyword },
    //       'Project.Technical_Skillset.Infrastructure': { $regex: keyword },
    //     },
    //   };
    //   pipelineStages.push(stage);
    // });

    // console.log('pipeline Stage:: ', JSON.stringify(pipelineStages));

    const dataOfProjects = await projectsDataCollection.aggregate(pipelineStages).toArray();

    

    const projectsData = dataOfProjects.map((projectData) => {
      return ({
        Project: projectData.Project,
        Technical_Skillset: projectData.Technical_Skillset,
        id: projectData._id.toString(),
      })
    });

    // console.log('projectsData:: ', projectsData);

    client.close();
    res.status(200).json(projectsData);
  }
}
