const Feedback = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
};

export default Feedback;
