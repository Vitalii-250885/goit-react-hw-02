import { useState, useEffect } from "react";

import Description from "../description/Description";
import Feedback from "../feedback/Feedback";
import Options from "../options/Options";
import Notification from "../notification/Notification";

const App = () => {
  const [feedbacks, setValues] = useState(() => {
    const feedbackStart = window.localStorage.getItem("feedbacks");

    if (feedbackStart !== null) {
      return JSON.parse(feedbackStart);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const feedbackJson = JSON.stringify(feedbacks);

  useEffect(() => {
    localStorage.setItem("feedbacks", feedbackJson);
  }, [feedbackJson]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

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
