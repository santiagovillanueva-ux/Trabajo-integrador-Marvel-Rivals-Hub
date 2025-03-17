import React from "react";
import { useParams } from "react-router-dom";
import newsData from "./data/newsData";
import { hotTopicsData } from "./components/NewsCarousel";
import "./NewsDetail.css";


function NewsDetail() {
    const { id } = useParams(); 
    const allNews = [...newsData, ...hotTopicsData]; 
    const newsItem = allNews.find((news) => news.id === Number(id)); 

    if (!newsItem) {
        return <h2 style={{ color: "red", textAlign: "center" }}>Noticia no encontrada</h2>;
    }

    return (
        <div className="news-detail">
            <h1>{newsItem.title}</h1>
            <img src={newsItem.image} alt={newsItem.title} className="news-detail-image" />
            <p className="news-info info-text" >{newsItem.info}</p>
            {newsItem.trailer && newsItem.trailer.trim() !== "" && (
            <a
              href={newsItem.trailer}
              target="_blank"
              rel="noopener noreferrer"
              className="add-button"
            >
              Ver trailer
            </a>
            )}
            {newsItem.video && newsItem.video.trim() !== "" && (
            <a
              href={newsItem.video}
              target="_blank"
              rel="noopener noreferrer"
              className="add-button"
            >
              Ver video
            </a>
            )}
        </div>
    );
}

export default NewsDetail;
