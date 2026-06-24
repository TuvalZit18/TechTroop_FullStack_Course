const Box = ({ text, color, ...props }) => {
  return (
    <div
      style={{
        width: "150px",
        aspectRatio: "1/1",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </div>
  );
};

export default Box;
