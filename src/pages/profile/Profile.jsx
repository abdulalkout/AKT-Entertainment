import React from "react";
import "./Profile.css";
import NavBar from "../../components/navBar/NavBar";
import { useReducer, useContext } from "react";
import { ProfileContext } from "../../contexts/userContext/ProfileContext";
import profilePic from "../../images/profilePic/myPic.jpg";

const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      return {
        id: 0,
      };
    case 2:
      return {
        id: 1,
      };
    case 3:
      return {
        id: 2,
      };
    case 4:
      return {
        id: 3,
      };
  }
};

function Profile() {
  const [state, dispatch] = useReducer(reducer, {
    id: 0,
  });

  const { profileData } = useContext(ProfileContext);

  return (
    <div>
      <NavBar />
      <div className="profile-div">
        <div>
          <img className="profile-pic" src={profilePic} />
        </div>
        <div className="title-buttons-discription">
          <div>
            <p className="title">{profileData[state.id].title}</p>
            <div className="discription">
              {profileData[state.id].discription.map((paragraph, index) => {
                return <p>{paragraph}</p>;
              })}
            </div>
          </div>
          <div className="profile-buttons-section">
            <button
              className="profile-buttons"
              onClick={() => {
                dispatch({ type: 1 });
              }}
            >
              Summary
            </button>
            <button
              className="profile-buttons"
              onClick={() => {
                dispatch({ type: 2 });
              }}
            >
              Project-1
            </button>
            <button
              className="profile-buttons"
              onClick={() => {
                dispatch({ type: 3 });
              }}
            >
              Project-2
            </button>
            <button
              className="profile-buttons"
              onClick={() => {
                dispatch({ type: 4 });
              }}
            >
              Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
