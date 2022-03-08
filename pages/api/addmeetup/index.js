import { MongoClient } from "mongodb";

async function addMeetUpHandler(req, res) {
  if (req.method === "POST") {
    try {
      let client = await MongoClient.connect(`mongodb+srv://abdul:abdul@cluster0.mvh28.mongodb.net/meetups?retryWrites=true&w=majority`);
      let db = client.db();
      let meetupCollection = db.collection("meetups");
      let result = await meetupCollection.insertOne(req.body);
      console.log(result)
      res.status(201).json({message : "meetup inserted" , response : result})
    } catch (error) {
      console.log(error);
    }
  }
}

export default addMeetUpHandler;
