import React from "react";
import Typical from "react-typical";
import { FaFacebookF} from "react-icons/fa";
import "./Profile.css";
function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon"> 
            <a href="#">
              <i className="fa-fa facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa-fa google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa-fa instagram"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=aor9hlcODUE">
              <i className="fa-fa youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa-fa twitter-square"></i>
            </a>
            
            </div>
         
          </div>
        

        <div className="profile-details-name">
          <span className="primary-text">
            {" "}
            Hello I'm <span className="highlighted-text">Ehiedu</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              { " "}
              <Typical
              loop={Infinity}
              steps={[
                "Enthusiastic dev",
                1000,
                "Full-Stack Dev",
                1000,
                "Web Developer",
                1000,
                "Android Developer",
                1000,
              ]}
              />
            </h1>
            <span className="project-role-tagline">
              For Front and Back-end development contactMe

            </span>

        </span>

        </div>
        <div className="profile-option">
          <button className="primary-btn">
            { ""}
            Hire Me{ " "}
          </button>
          <a href="ICT Jobs.pdf" download="ICT Jobs.pdf">
            <button className="btn highlighted-btn"> Get Resume</button>
          </a>

        </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
