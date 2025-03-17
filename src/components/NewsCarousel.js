import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../NewsCarousel.css";

const hotTopicsData = [
  {
    id: 101 ,
    title: "New trailer for season 1 - Eternal Night Falls",
    image: "/newsimages/Eternal nights image.jpeg",
    description: "Check out the incredible new trailer for the new season.",
    info: "Marvel Rivals has unveiled the first cinematic trailer for its Season 1, titled Eternal Night Falls. In this spectacular preview, we see how Dracula and his army of vampires have plunged New York into an eternal night, challenging Earth’s mightiest heroes. The cinematic hints that this new event will introduce significant changes to the game, including new maps, heroes, and a more immersive narrative. With a vibrant art style and fast-paced action, Marvel Rivals continues to raise fan expectations and promises a unique experience in the team-based shooter genre.", 
    trailer: "https://youtu.be/zATLJ6Cqt0c?si=DJPwz4OMjVFdVYqH",
    link: "/news"
  },
  {
    id: 102 ,
    title: "New characters reveal",
    image: "/newsimages/rivals-human-torch-and-the-thing.avif",
    description: "Discover more about Human Torch and The Thing.",
    info:"Get ready to master the abilities of Human Torch and The Thing in Marvel Rivals! From blazing aerial assaults to earth-shattering punches, these two legends bring explosive gameplay to the battlefield. Watch the video below and discover how their unique powers can turn the tide of battle! ", 
    video: "https://youtu.be/6uMgRdL-sgU?si=3C4XGPnWYm9I4X_B",
    link: "/news"
  },
  {
    id: 103 ,
    title: "From zero to Heroe:  Storm Buff",
    image: "/newsimages/stormhottopic.webp",
    description: "Conocé las nuevas ubicaciones donde se desarrollarán las batallas.",
    info:"The tides have shifted, and the winds of change have carried Storm from the depths of irrelevance to the peak of dominance in Marvel Rivals. Once an underwhelming pick, Ororo Munroe has become a force to be reckoned with, thanks to significant buffs introduced between Season 0 and Season 1.5. \n Back in Season 0, Storm struggled to make an impact on the battlefield. With a pick rate of just 1.66%, she was the least chosen hero in the entire game. Her win rate of 49.01% reflected her struggles—falling just short of the break-even point and proving that her kit lacked the effectiveness needed to compete with the game’s meta. Players simply weren’t finding enough value in her abilities compared to stronger alternatives. \n Fast forward to Season 1.5, and the Storm we once knew is barely recognizable. With a pick rate now soaring to 5.49%, she is quickly becoming a favorite choice among players. More impressively, her win rate has skyrocketed to 57.48%, making her the most successful hero in the game right now. \n What changed? Several key buffs have made her a high-priority pick:\n🔹 Lightning Strike Damage Increase – Storm’s primary attack now deals significantly more damage, making her a deadly ranged threat.\n🔹 Wind Gust Mobility Buff – Improved movement speed allows her to reposition quickly and avoid enemy pressure.\n🔹 Ultimate Rework – Her iconic Tempest ability now has a shorter cooldown and a wider area of effect, making it a game-changing tool in fights.\n With these buffs, Storm is no longer just a flashy pick—she’s a game-winning force. Teams are now incorporating her into their strategies, and high-level players are taking full advantage of her improved utility. She’s become an essential part of team compositions that require burst damage, mobility, and crowd control.\n Storm’s transformation is a testament to how balance changes can redefine a hero’s role in Marvel Rivals. From being the least-picked character to sitting at the top with the highest win rate, she truly embodies the title.", 
    link: "/news"
  }
];

function NewsCarousel() {
  return (
      <Carousel interval={4000} pause="hover">
          {hotTopicsData.map((news) => (
              <Carousel.Item key={news.id}>
                  <div className="text-center">
                      <img className="news-image" src={news.image} alt={news.title} />
                  </div>
                  <Carousel.Caption>
                      <h3>{news.title}</h3>
                      <p>{news.description}</p>
                      <a href={`/news/${news.id}`} className="btn btn-warning">Leer más</a> 
                  </Carousel.Caption>
              </Carousel.Item>
          ))}
      </Carousel>
  );
}

export default NewsCarousel;
export { hotTopicsData };

