import * as React from "react";
import "./LearnMoreButton.css";
const LearnMoreButton = (props: { learnMore: string, className?: string }) => {
  return (
    <button className={`learn-more-button ${props.className || ""}`}>
      {props.learnMore || "Learn More"}
    </button>
  );
};
export default LearnMoreButton;
