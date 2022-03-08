import { MongoClient } from "mongodb";
import AllMeetUps from "../Components/AllMeetUps/AllMeetUps";

let allMeetUpsArr = [
  {
    img: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Go-for-a-nice-romantic-walk-to-the-Buddha-Garden-.jpg",
    name: "galantic place",
    address: "some where 143 city 8834",
    description: "this is first meetup",
    _id: 1,
  },
  {
    img: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Go-for-a-nice-romantic-walk-to-the-Buddha-Garden-.jpg",
    name: "argentio place",
    address: "some where 52 city 039821",
    description: "this is second meetup",
    _id: 2,
  },
  {
    img: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Go-for-a-nice-romantic-walk-to-the-Buddha-Garden-.jpg",
    name: "forgland place",
    address: "some where 24 city 3543",
    description: "this is third meetup",
    _id: 3,
  },
  {
    img: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Go-for-a-nice-romantic-walk-to-the-Buddha-Garden-.jpg",
    name: "bicanto place",
    address: "some where 334 city 1214",
    description: "this is fifth meetup",
    _id: 4,
  },
];

function home(props) {
  return (
    <div>
      <AllMeetUps allMeetUpsArr={props.meetups} />
    </div>
  );
}

// export async function getServerSideProps(){
//   return{
//     props : {
//       meetups : allMeetUpsArr
//     }
//   }
// }

export async function getStaticProps() {

  let client = await MongoClient.connect(`mongodb+srv://abdul:abdul@cluster0.mvh28.mongodb.net/meetups?retryWrites=true&w=majority`);
  let db = client.db();
  let meetupCollection = db.collection("meetups");
  let result = await meetupCollection.find().toArray();
  client.close();

  return {
    props:{
      meetups : JSON.parse(JSON.stringify(result))
    },
    revalidate : 1
  };
}

export default home;
