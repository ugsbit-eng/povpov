"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown, Check } from "lucide-react";

interface KBFeedbackWidgetProps {
  articleId: string;
}

export default function KBFeedbackWidget({ articleId }: KBFeedbackWidgetProps) {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedback(type);
    if (type === "not-helpful") {
      setShowCommentBox(true);
    } else {
      // For positive feedback, just submit immediately
      submitFeedback(type, "");
    }
  };

  const submitFeedback = (type: string, commentText: string) => {
    // In a real implementation, send to analytics or backend
    console.log("Feedback submitted:", { articleId, type, comment: commentText });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFeedback(null);
      setShowCommentBox(false);
      setComment("");
    }, 3000);
  };

  const handleSubmitComment = () => {
    if (feedback) {
      submitFeedback(feedback, comment);
    }
  };

  if (submitted) {
    return (
      <div className="my-12 p-6 bg-primary-green/10 border border-primary-green/20 rounded-2xl">
        <div className="flex items-center gap-3 text-primary-green">
          <Check className="w-5 h-5" />
          <p className="font-medium">Thank you for your feedback!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 p-6 bg-background-secondary border border-border-subtle rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Was this helpful?</h3>
      
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleFeedback("helpful")}
          disabled={feedback !== null}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            feedback === "helpful"
              ? "bg-primary-green text-background-primary"
              : "bg-background-tertiary text-text-secondary hover:bg-primary-green/20 hover:text-primary-green"
          } disabled:opacity-50`}
          aria-label="This article was helpful"
        >
          <ThumbsUp className="w-4 h-4" />
          <span className="text-sm font-medium">Yes</span>
        </button>

        <button
          onClick={() => handleFeedback("not-helpful")}
          disabled={feedback !== null}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            feedback === "not-helpful"
              ? "bg-error-red text-white"
              : "bg-background-tertiary text-text-secondary hover:bg-error-red/20 hover:text-error-red"
          } disabled:opacity-50`}
          aria-label="This article was not helpful"
        >
          <ThumbsDown className="w-4 h-4" />
          <span className="text-sm font-medium">No</span>
        </button>
      </div>

      {showCommentBox && (
        <div className="mt-4 space-y-3">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What could we improve? (optional)"
            className="w-full px-4 py-3 bg-background-tertiary border border-border-subtle rounded-lg text-text-primary placeholder:text-text-muted focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green/20 resize-none"
            rows={3}
          />
          <button
            onClick={handleSubmitComment}
            className="px-4 py-2 bg-primary-green text-background-primary rounded-lg text-sm font-medium hover:bg-primary-green-alt transition-colors"
          >
            Submit Feedback
          </button>
        </div>
      )}
    </div>
  );
}