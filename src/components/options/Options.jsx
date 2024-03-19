const Options = ({ updateFeedback, resetFeedbacks, totalFeedback }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback !== 0 ? (
        <button onClick={resetFeedbacks}>Reset</button>
      ) : undefined}
    </>
  );
};

export default Options;
