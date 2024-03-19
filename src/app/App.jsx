import { useState } from "react";

import Description from "../description/Description";
import Feedback from "../feedback/Feedback";
import Options from "../options/Options";
import Notification from "../notification/Notification";

const startData = {
  good: 0,
  neutral: 0,
  bad: 0,
};

if (!localStorage.getItem("feedbacks")) {
  localStorage.setItem("feedbacks", JSON.stringify(startData));
}

const data = JSON.parse(localStorage.getItem("feedbacks"));

const App = () => {
  const [feedbacks, setValues] = useState(data);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

  const updateFeedback = (feedbackType) => {
    setValues({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedbacks = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedbacks={resetFeedbacks}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
