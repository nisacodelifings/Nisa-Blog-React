import React from "react";
import Box from "./Box";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <Box id="purple" judul="About Our Skills" />
        <Box id="red" />
        <Box id="green" />
        <Box id="pink" />
      </main>
    </div>
  );
}
