import { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

const Exercise2 = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  });
  const displayConvo = (name) => {
    setData({ ...data, displayConversation: name });
  };
  return data.displayConversation === null ? (
    <List
      contacts={data.conversations.map((item) => item.with)}
      displayConvo={displayConvo}
    />
  ) : (
    <Conversation
      convo={
        data.conversations.filter(
          (con) => con.with === data.displayConversation,
        )[0].convo
      }
      sender={data.displayConversation}
      displayConvo={displayConvo}
    />
  );
};

export default Exercise2;
