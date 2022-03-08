import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function addMeetUps() {
  let router = useRouter();
  let [title, setTitle] = useState("");
  let [address, setAddress] = useState("");
  let [image, setImage] = useState("");
  let [description, setDescription] = useState("");

  async function addMeetUpFunc() {
    try {
      let res = await axios.post("http://localhost:3000//api/addmeetup/", {
        title,
        address,
        image,
        description,
      });
      setTitle('')
      setAddress('')
      setDescription('')
      setImage('')
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="main_add_meetups">
      <div className="meetups">
        <div className="meetup_title">
          <label>Meetup Title : </label>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="address">
          <label>Address :</label>
          <div>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="meetup_image">
          <label>Meetup Image :</label>
          <div>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="description">
          <label>Description :</label>
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button onClick={addMeetUpFunc}>Add Meetup</button>
        </div>
      </div>
    </div>
  );
}

export default addMeetUps;
