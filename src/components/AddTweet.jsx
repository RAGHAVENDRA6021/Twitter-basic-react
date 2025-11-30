import React, { useState } from "react";

const AddTweet = ({handleAddTweet}) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Add tweet"
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
          handleAddTweet(text)
          setText("");
        }}
      >
        Tweet
      </button>
    </div>
  );
};

export default AddTweet;
