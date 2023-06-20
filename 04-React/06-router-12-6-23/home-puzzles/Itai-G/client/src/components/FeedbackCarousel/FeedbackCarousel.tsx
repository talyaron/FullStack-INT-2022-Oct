import React, { useState, useEffect } from 'react';

interface Feedback {
  name: string;
  message: string;
}

interface FeedbackCarouselProps {
  feedbackData: Feedback[];
}

const FeedbackCarousel: React.FC<FeedbackCarouselProps> = ({ feedbackData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (feedbackData.length > 0) {
      const timer = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
          );
          setIsAnimating(false);
        }, 1000); // Delay before switching to next feedback
      }, 5000); // Interval of 5 seconds

      return () => clearInterval(timer);
    }
  }, [feedbackData]);

  if (feedbackData.length === 0) {
    return null;
  }

  return (
    <div className="feedback-carousel">
      <h3>Customer Feedback</h3>
      <div className={`feedback-slide ${isAnimating ? 'fade-in' : ''}`}>
        <p>{feedbackData[currentIndex].message}</p>
        <p>- {feedbackData[currentIndex].name}</p>
      </div>
    </div>
  );
};

export default FeedbackCarousel;