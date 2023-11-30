import React from "react";
import Textarea from "./components/textarea";

export default function App() {
  return (
    <div>
      <Textarea style={{ borderRadius: 6 }} maxLen={20} />
    </div>
  );
}
