import React from "react";

const Switch = () => {
  // 문서 배경색 변경 black <==> white

  const handleClick = () => {
    const bodystyle = document.body.style;
    // document.body.style.backgroundColor = 'black'
    if (bodystyle.backgroundColor === "black") {
      bodystyle.backgroundColor = "white";
    } else {
      bodystyle.backgroundColor = "black";
    }
  };

  return (
    <div>
      <button className="p-4 bg-amber-400" onClick={handleClick}>
        Toggle
      </button>
    </div>
  );
};

export default Switch;
