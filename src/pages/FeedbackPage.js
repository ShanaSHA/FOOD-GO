import React, { useState } from "react";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    // Here you would typically send feedback to your backend or save it
    console.log("Feedback submitted:", feedback);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl mb-6">Leave Your Feedback</h2>
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        rows="5"
        className="w-full border p-4 mb-4"
        placeholder="Your feedback here"
      />
      <button
        onClick={handleSubmitFeedback}
        className="bg-green-600 text-white py-2 px-6 rounded-full text-xl"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackPage;
