interface Feedback {
  feedback: string;
  sentiment: string;
  createdAt: string;
}

export const addFeedbackToLocalStorage = (feedback: Feedback) => {
  const feedbacks = getFeedbacksFromLocalStorage();
  feedbacks.push(feedback);
  localStorage.setItem("demo-feedbacks", JSON.stringify(feedbacks));
};

export const getFeedbacksFromLocalStorage = (): Feedback[] => {
  const feedbacks = localStorage.getItem("demo-feedbacks");
  return feedbacks ? JSON.parse(feedbacks) : [];
};
