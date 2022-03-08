const AllMeetUps = ({ allMeetUpsArr }) => {
  return (
    <div className="all_meetups">
      <h1>All Meetups</h1>
      <div className="meetup_container">
        {allMeetUpsArr.map((item, index) => (
          <div className="main_meetups" key={index}>
            <img src={item.img} />
            <div className="meetup_content">
              <h2>{item.name}</h2>
              <p>{item.address}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMeetUps;
