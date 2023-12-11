import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

function ProfileContextProvider(props) {
  const [profileData, setProfileData] = useState([
    {
      id: 1,
      title: "PROFESSIONAL STATEMENT",
      discription: [
        `Engineer with a passion for solving complex problems, transitioning
      from electronics engineering to software engineering after completing
      450+ hours of hands-on technical instruction in software development,
      encompassing HTML, CSS, JavaScript, React, Express, and Node. Driven
      to learn and continuously improve.`,
      ],
    },
    {
      id: 2,
      title: `HTML, CSS, and JavaScript PROJECT`,
      discription: [
        `Tish-Tisha Game - Developed a Tish-Tisha app allowing users to play against each other using strategy to move virtual pieces in a grid while enhancing critical thinking skills.  Engineered seamless gameplay with straightforward user interactions, implementing a two-round victory system for longer game play and added competitiveness.  Tested and revised an intuitive interface for shape selection, movement, and strategic placement based on peer feedback.  Tech: HTML, CSS, JavaScript`,
      ],
    },
    {
      id: 3,
      title: `REACT PROJECT`,
      discription: [
        `AKT Entertainment - Developed AKT Entertainment, a dynamic front-end application using React to provide a unified platform for entertainment. Utilized free APIs to display diverse content such as comics and movies, enhancing user experience with React hooks and routes. Collaborated with fellow developers to integrate and showcase interactive games for added enjoyment. Implemented an intuitive and responsive design for seamless navigation. 
      Tech: React, JavaScript, HTML, CSS.`,
      ],
    },
    {
      id: 4,
      title: `PROFESSIONAL EXPERIENCE`,
      discription: [
        `Senior Wireline Field Engineer`,
        `Troubleshot and resolved technical issues ranging from equipment repairs on rigs to setting adjustments allowing for the collection of high-quality data `,
        `Collaborated with remote and onsite teams to diagnose issues and develop solutions, improving efficiency and reducing downtime`,
        `Led Rig and Field Operations crews, training new employees and ensuring compliance with safety regulations and quality standards`,
      ],
    },
  ]);

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider;
