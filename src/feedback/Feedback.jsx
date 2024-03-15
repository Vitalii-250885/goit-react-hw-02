const Feedback = (props) => {
  let good = Object.values(props)[0].good;
  let neutral = Object.values(props)[0].neutral;
  let bad = Object.values(props)[0].bad;

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </>
  );
};

export default Feedback;
