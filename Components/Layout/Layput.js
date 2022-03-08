import Link from "next/link";

const Layput = (props) => {
  return (
    <div className="layout">
      <div className="main_header">
        <div>
          <h2>Meet Up App</h2>
        </div>
        <div>
          <ul>
            <li><Link href="/">All Meetups</Link></li>
            <li><Link href="/addmeetups">Add Meetup</Link></li>
            <li><Link href="/mymeetups">My Meetups</Link></li>
          </ul>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layput;
