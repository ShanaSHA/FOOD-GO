// src/components/FeedbackForm.js
import React from "react";

function FeedbackForm() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Feedback</h2>
      <form className="space-y-4">
        <textarea className="w-full border p-2" placeholder="Your feedback"></textarea>
        <button className="bg-green-500 hover:bg-green-700 px-4 py-2 text-white rounded-md">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
