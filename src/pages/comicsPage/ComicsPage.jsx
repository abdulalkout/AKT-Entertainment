import React from "react";
import ComicsDisplay from "../../components/comicsDisplay/ComicsDisplay";

//-- import components --//
import NavBar from "../../components/navBar/NavBar";

function ComicsPage() {
  return (
    <div>
      <NavBar />
      <ComicsDisplay />
    </div>
  );
}

export default ComicsPage;
