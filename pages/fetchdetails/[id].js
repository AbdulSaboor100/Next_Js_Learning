import AllMeetUps from "../../Components/AllMeetUps/AllMeetUps";

function fetchDetails(props) {
  return (
    <div>
      {/* <AllMeetUps showExtra={true} allMeetUpsArr={props.allMeetUpsArr} /> */}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  let { id } = context.params;
  console.log(id)
  return {
    props: {
      allMeetUpsArr: {},
    },
  };
}

export default fetchDetails;
