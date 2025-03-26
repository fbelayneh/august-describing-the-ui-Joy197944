import React from "react";
import styled from "styled-components";

const GreetingContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 0;
`;

const Greeting = () => {
  const hour = new Date().getHours();
  let message;
  if (hour < 12) {
    message = "Good morning! Start your day with wisdom.";
  } else if (hour < 18) {
    message = "Good afternoon! Reflect on today's lessons.";
  } else {
    message = "Good evening! End the day with insight.";
  }
  return <GreetingContainer>{message}</GreetingContainer>;
};

export default Greeting;