// ChatbotButton.js

import React from "react";

const ChatbotButton = () => {
  // Add your chatbot functionality here
  const openChat = () => {
    // Implement your chat window or integration logic
  };

  return (
    <div
      variant="contained"
      color="primary"
    //   onClick={openChat}
      style={{
        borderRadius: "20px",
        color: "white",
        backgroundColor: "#212121",
        padding: "15px 20px",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        transition: "transform 0.2s", // Add a transition for the transform property
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)"; // Zoom in on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Restore the original size on mouse leave
      }}
    >
      <b>AI CONSULTANT</b>
    </div>
  );
};

export default ChatbotButton;
