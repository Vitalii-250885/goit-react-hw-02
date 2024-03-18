import { useState } from "react";

import Description from "../description/Description";
import Feedback from "../feedback/Feedback";
import Options from "../options/Options";

const App = () => {
  const [feedbacks, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // console.log(Object.keys(feedbacks));

  const updateFeedback = () => {
    setValues({
      ...feedbacks,
      feedbackType: feedbacks.feedbackType + 1,
    });
  };

  // const updateGoodFeedback = () => {
  //   setValues({
  //     ...feedbacks,
  //     good: feedbacks.good + 1,
  //   });
  // };

  // const updateNeutalFeedback = () => {
  //   setValues({
  //     ...feedbacks,
  //     neutral: feedbacks.neutral + 1,
  //   });
  // };

  // const updateBadFeedback = () => {
  //   setValues({
  //     ...feedbacks,
  //     bad: feedbacks.bad + 1,
  //   });
  // };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbacks={feedbacks} />
    </>
  );
};

export default App;
