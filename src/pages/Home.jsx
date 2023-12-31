import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">SignUp</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/meetingtype">MeetingType</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/hostedmeetings">HostedMeetings</Link>
        </li>
        <li>
          <Link to="/durationone">DurationOne</Link>
        </li>
        <li>
          <Link to="/goalprogress">GoalProgress</Link>
        </li>
        <li>
          <Link to="/teamdashboard">TeamDashboard</Link>
        </li>
        <li>
          <Link to="/durationtwo">DurationTwo</Link>
        </li>
        <li>
          <Link to="/duration">Duration</Link>
        </li>
        <li>
          <Link to="/transcriptstwo">TranscriptsTwo</Link>
        </li>
        <li>
          <Link to="/transcriptsfour">TranscriptsFour</Link>
        </li>
        <li>
          <Link to="/transcripts">Transcripts</Link>
        </li>
        <li>
          <Link to="/transcriptsone">TranscriptsOne</Link>
        </li>
        <li>
          <Link to="/transcriptsthree">TranscriptsThree</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
