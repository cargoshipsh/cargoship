import ContentWrapper from "@/components/ContentWrapper";
import SingleFeedback from "@/components/SingleFeedback";
import ViewSwitch from "@/components/ViewSwitch";
import { getFeedbacksFromLocalStorage } from "@/lib/storage";
import { useEffect, useState } from "react";

export default function AdminPage({}) {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    const feedbacks = getFeedbacksFromLocalStorage();
    setFeedbacks(feedbacks.sort(compare));

    // function to sort feedbacks by date
    function compare(a: any, b: any) {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      let comparison = 0;
      if (dateA > dateB) {
        comparison = 1;
      } else if (dateA < dateB) {
        comparison = -1;
      }
      return comparison * -1;
    }
  }, []);

  const customerSatisfactionRate = () => {
    const positiveFeedbacks = feedbacks.filter((feedback) => feedback.sentiment === "positive");
    return ((positiveFeedbacks.length / feedbacks.length) * 100).toFixed(2);
  };

  return (
    <>
      <ViewSwitch />
      <ContentWrapper>
        <div className="rounded bg-slate-100 p-5 shadow">
          <h3 className=" font-semibold">Customer Satisfaction Rate: {customerSatisfactionRate()}%</h3>
          <p className="text-light mt-2 text-slate-500">Congratulations! Your business is doing great! 🎉</p>
        </div>
        <hr className="my-5 text-slate-500" />
        {feedbacks.map((feedback) => (
          <SingleFeedback feedback={feedback} />
        ))}
      </ContentWrapper>
    </>
  );
}
