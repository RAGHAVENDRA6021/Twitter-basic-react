import React, { useState } from "react";
import "../css/Tweet.css";

const Tweet = ({ tweetId, content, likes, createdAt, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(content);
  const handleEditSave = () => {
    if (isEditing) {
      onEdit({
        id: tweetId,
        content: editedValue,
        likes,
        createdAt: new Date(),
      });
    }
    setIsEditing(!isEditing);
  };
  return (
    <div className="tweet-wrapper">
      <div className="arrange-buttons">
        {isEditing ? (
          <input
            type="text"
            value={editedValue}
            onChange={(event) => setEditedValue(event.target.value)}
          />
        ) : (
          <h3>{content}</h3>
        )}

        <div>
          <button style={{ marginRight: "10px" }} onClick={handleEditSave}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="arrange-buttons">
        <div>{likes} likes</div>
        <div>
          <b>Tweeted at</b> {createdAt}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
