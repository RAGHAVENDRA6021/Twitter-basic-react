import React, { memo, useCallback, useState } from "react";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";

const dummyList = [
  { content: "first tweet", likes: 20, id: 0, createdAt: new Date() },
  { content: "Second tweet", likes: 50, id: 1, createdAt: new Date() },
  { content: "Third tweet", likes: 100, id: 2, createdAt: new Date() },
];

const MemoisedAddTweet=memo(AddTweet)
const Twitter = () => {
  const [tweetList, setTweetLst] = useState(dummyList);
  const handleAddTweet = useCallback((text) => {
    let nextId =
      tweetList.length > 0 ? tweetList[tweetList.length - 1].id + 1 : 0;
    setTweetLst((prevList) => [
      ...prevList,
      {
        content: text,
        likes: Math.floor(Math.random() * 100),
        id: nextId,
        createdAt: new Date(),
      },
    ]);
  },[tweetList]);

  const handleEditTweet = useCallback((tweet) => {
    console.log(tweet);
    setTweetLst((prevList) =>
      prevList.map((prevTweet) =>
        prevTweet.id === tweet.id ? tweet : prevTweet
      )
    );
  },[]);

  const sortTweets = useCallback(() => {
    const newList = tweetList.sort((t1, t2) => {
      return t2.createdAt.getTime() - t1.createdAt.getTime();
    });
    console.log(newList)
    setTweetLst(()=>[...newList]);
  },[tweetList]);

  return (
    <div>
      <MemoisedAddTweet handleAddTweet={handleAddTweet} />
      <button onClick={sortTweets}>Sort Tweets</button>
      <TweetList tweetList={tweetList} onEdit={handleEditTweet} />
    </div>
  );
};

export default Twitter;
