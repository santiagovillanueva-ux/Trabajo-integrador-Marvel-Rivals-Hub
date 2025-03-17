import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewsCarousel from "./components/NewsCarousel";
import MapsCarousel from "./components/MapsCarousel";
import newsData from "./data/newsData"; 
import "./home.css";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); 
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200); 
    }
  }, [location]);

  const handleNewsClick = (id) => {
    navigate(`/news/${id}`); 
  };

  return (
    <main className="container mt-3" >
      <h2 className="section-title">🔥 HOT TOPICS 🔥</h2>
      <NewsCarousel />
      <section id="novedades" className="content-section">
        <h2 className="section-title">News</h2>
        <div className="news-grid">
          {newsData.map((news) => (
            <div key={news.id} className="news-card" onClick={() => handleNewsClick(news.id)}>
              <img src={news.image} alt={news.title} className="news-image" />
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="maps" className="content-section">
        <h2 className="section-title">Maps</h2>
        <MapsCarousel />
      </section>
    </main>
  );
}

export default Home;
