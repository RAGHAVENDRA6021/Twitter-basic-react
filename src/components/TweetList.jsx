import React,{memo} from "react";
import Tweet from "./Tweet";
import "../css/TweetList.css";
const MemoisedTweet =memo(Tweet)

const TweetList = ({ tweetList, onEdit }) => {
  return (
    <div>
      <h1>TweetList</h1>
      <ul className="tweet-list">
        {tweetList.map((tweet) => (
          <li key={tweet.id} className="tweet-li">
            <MemoisedTweet
              tweetId={tweet.id}
              content={tweet.content}
              likes={tweet.likes}
              createdAt={tweet.createdAt.toString()}
              onEdit={onEdit}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetList;
