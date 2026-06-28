const Conversation = ({ convo, sender, displayConvo }) => {
  console.log("🚀 ~ Conversation ~ convo:", convo);
  return (
    <>
      <button onClick={() => displayConvo(null)}>Back</button>
      {convo.map((c) => {
        return (
          <div key={c.text}>
            <span>{`${c.sender === "self" ? "Me" : sender}:${c.text}`}</span>
          </div>
        );
      })}
    </>
  );
};

export default Conversation;
