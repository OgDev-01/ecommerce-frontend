import HorizontalLine from "@/components/atoms/horizontalLine";
import React from "react";
import ChatwithUs from "../../Sections/SectionChatWithUs";
import TextUs from "../../Sections/SectionTextUs";
import TweetUs from "../../Sections/SectionTweetUs";

export const ComponentContact = ({ slices }) => {
  const [chatWithUs, textUs, tweetUs] = slices;
  console.log(chatWithUs);
  return (
    <div className='container'>
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h1>Contact Us</h1>
      </div>
      <HorizontalLine />
      <ChatwithUs {...chatWithUs} />
      <TextUs {...textUs} />
      <TweetUs {...tweetUs} />
    </div>
  );
};
