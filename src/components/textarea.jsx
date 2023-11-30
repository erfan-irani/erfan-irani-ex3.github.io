import React, { useState } from "react";

export default function Textarea({ style, maxLen }) {
  const [textAreaLength, setTextAreaLength] = useState("");
  return (
    <div
      style={{
        width: "max-content",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "200px",
        margin: "auto",
        fontFamily: "sans-serif",
      }}
    >
    
      <textarea
        style={style}
        name="comment"
        cols="50"
        rows="15"
        placeholder="Add your comment!"
        value={textAreaLength}
        onChange={(event) => setTextAreaLength(event.target.value)}
        maxLength={maxLen}
      ></textarea>
      <span style={{ position: "absolute", bottom: "12px", right: "10px" }}>
        {textAreaLength.length}/{maxLen}
      </span>
    </div>
  );
}
