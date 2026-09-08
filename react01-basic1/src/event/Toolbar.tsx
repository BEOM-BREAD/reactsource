import React from "react";

const Button3 = ({ onClick, children }) => {
  return (
    <div>
      <button className="p-4 bg-orange-500 m-2" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

// 자식
const PlayButton = ({ movieName }) => {
  return (
    <div>
      <Button3 onClick={() => alert("Playing ${movieName}")}>Play</Button3>
    </div>
  );
};

// 자식
const UploadButton = ({}) => {
  return (
    <div>
      <Button3 onClick={() => alert("Uploading!")}>Upload Image</Button3>
    </div>
  );
};

const Toolbar = () => {
  return (
    <div>
      <PlayButton movieName={"오디세이"} />
      <UploadButton />
    </div>
  );
};

export default Toolbar;
