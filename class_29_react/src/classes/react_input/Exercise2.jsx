import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");
  const onSelectFruit = (value) => {
    setFruit(value);
    console.log(`${name} chose ${value}`);
  };
  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={(e) => onSelectFruit(e.target.value)}
        value={fruit}
      >
        <option value="Banana">Banana</option>
        <option value="Apple">Apple</option>
        <option value="Appricot">Appricot</option>
        <option value="Orange">Orange</option>
        <option value="Mango">Mango</option>
        <option value="Cherry">Cherry</option>
        <option value="Grape">Grape</option>
        <option value="Watermelon">Watermelon</option>
        <option value="Melon">Melon</option>
      </select>
    </div>
  );
};
export default Exercise2;
