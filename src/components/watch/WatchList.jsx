import React from "react";

function WatchList({ data }) {
  return (
    <div>
      <p>Watch Later</p>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} />
            <p style={{ color: "white" }}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default WatchList;
