const Exe2 = () => {
  const getClassName = (temperature) => {
    if (temperature < 15) return "freezing";
    if (temperature >= 15 && temperature < 30) return "fair";
    return "hell-scape";
  };
  const tempretures = [7, 18, 36];

  const showWeather = (temps) => {
    return temps.map((temp) => (
      <div id="weatherBox" className={getClassName(temp)}>
        {temp}
      </div>
    ));
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <p>
        "freezing" - if the temperature is below 15 <br />
        "fair" - if the temperature is between 15 and 30 <br />
        "hell-scape" - otherwise
      </p>
      <div className="exercise" id="ex-2">
        <div className="weatherBoxes-container">{showWeather(tempretures)}</div>
      </div>
    </div>
  );
};

export default Exe2;
