function addMeetUps() {
  return (
    <div className="main_add_meetups">
      <div className="meetups">
        <div className="meetup_title">
          <label>Meetup Title : </label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="address">
          <label>Address :</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="meetup_image">
          <label>Meetup Image :</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="description">
          <label>Description :</label>
          <div>
            <textarea />
          </div>
        </div>
        <div>
            <button>Add Meetup</button>
        </div>
      </div>
    </div>
  );
}

export default addMeetUps;
