import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Heroes from "./heroes";
import NewsDetail from "./NewsDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;