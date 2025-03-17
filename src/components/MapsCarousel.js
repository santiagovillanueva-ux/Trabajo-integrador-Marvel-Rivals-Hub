import React, { useState } from "react";
import "../MapsCarousel.css"; 

const mapsData = [
  {
    id: 1,
    name: "Central Park",
    description: "As the Eternal Night continues in New York, several heroes are struggling against Count Dracula and his massive army of vampires. Dracula has already built his own enormous castle in the heart of Manhattan's Central Park and has taken certain prisoners, including Blade, a half-vampire, and Ratatoskr, the squirrel goddess of Yggdrasil.",
    image: "/imagesmaps/centralpark.avif",
  },
  {
    id: 2,
    name: "Hall of Djalia",
    description: "From a single Vibranium meteorite, Wakanda rose to greatness. Now, at the heart of the galaxy, they’ve uncovered the homeland of that very mound.But no matter how far it's technology advances, Wakanda's strength will always be its people. Wakanda Forever!",
    image: "/imagesmaps/Hall_of_Djalia.webp",
  },
  {
    id: 3,
    name: "Symbiotic Surface",
    description: "Stirred awake by the Timestream Entanglement, Knull taps into Chronovium to spread his dark divinity across the gods and free himself from his prison planet: Klyntar. Sensing the looming threat, Venom rushes to consume the severed essence of the god before Knull fully revives! On a mission from Shuri, the Milano malfunctions and crash lands in the ruins of the Agents of the Cosmos. Now, the Guardians of the Galaxy clash with Venom over how to use this dark power. Will they decide to join forces against Knull or will true evil ultimately emerge victorious?",
    image: "/imagesmaps/Klyntar_Symbiotic_surface.webp",
  },
  {
    id: 4,
    name: "Shin-Shibuya",
    description: "From an island he suspended above Tokyo, the enigmatic Master Weaver plans to use the energy from a temporal rift created by the Timestream Entanglement to strengthen the Web of Life and Destiny. His disciple, Spider-Zero, has concerns about her master's actions and is leading an effort to stitch the rift closed for good. The Master Weaver doesn't handle disobedience well, so he banished Spider-Zero from Spider-Islands. Still, Zero's ready to do whatever it takes to save the day and earn back her rightful spot on the Web.",
    image: "/imagesmaps/shin_shibuya.webp",
  },
  {
    id: 5,
    name: "Midtown",
    description: "After the events at the Sanctum Sanctorum, the pages of the Darkhold were scattered during the ongoing invasion of New York by Count Dracula and his vampiric army. Meanwhile, the city has been heavily swarmed by vampires, and the citizens have been severely impacted, becoming vampires themselves. Several heroes, including Iron Man, Mister Fantastic, Doctor Strange, Scarlet Witch and Moon Knight, met at the Baxter Building to devise a plan to stop the vampires. They intend to deploy the Montesi Formula, an incantation from the Darkhold capable of eliminating vampires.",
    image: "/imagesmaps/midtown.png",
  },
  {
    id: 6,
    name: "Spider-Islands",
    description: "To patch up the temporal rift, the Master Weaver is working around the clock to spin his magic while also suspending an entire network of islands aloft, far above from the urban hustle. As a lover of time, he's preserved many more classic Japanese elements, from zen gardens to his own sacred tenshu, where he protects a personal sliver of the Web of Life and Destiny itself. It seems that weaving the Multiverse back together is difficult for one spider, so let's get Spider-Zero back in action!",
    image: "/imagesmaps/Spider-islands.webp",
  },
  {
    id: 7,
    name: "Yggdrasill Path",
    description: "Beneath the sky-shutting canopy of the World Tree, Yggdrasill, lies the golden glory of Asgard, realm of the gods, now overgrown with the roots and flora. However, the throne-seizing scheme of Loki, god of mischief, threatens the ever-lasting prosperity of this kingdom and all of the Ten Realms.",
    image: "/imagesmaps/yggdrasill_Path.webp",
  },
  {
    id: 8,
    name: "Hell's Heaven",
    description: "Hell's Heaven was a secret Hydra base used for bioweapons research, mostly involving the Hive parasites. The base was attacked by a combination of Nick Fury's Team Black and the Howling Commandos PMC, who were using two ex-S.H.I.E.L.D. Helicarriers that they stole from H.A.M.M.E.R. ",
    image: "/imagesmaps/Hydra_Charteris_Base.webp",
  },
  {
    id: 9,
    name: "Birnin T'Challa",
    description: "This map, based on a spacebound Wakanda, is a Domination map where teams clash to take control of Warrior Falls, the Stellar Spaceport, and the Imperial Institute of Science.",
    image: "/imagesmaps/Warrior_falls_tchalla.webp",
  },
  {
    id: 10,
    name: "Royal Palace",
    description: "Thor leads a resistance to reclaim key locations: Odin’s Archive, the Throne Room, and the Bifrost Gardens. These landmarks are crucial for retaking Asgard and stopping Loki. Whether you win or lose, the cutscene shows Thor confronting Loki in the throne room, setting the stage for the next phase of the resistance.",
    image: "/imagesmaps/Royal_Palace.webp",
  },
];

function MapsCarousel() {
  const [currentMapIndex, setCurrentMapIndex] = useState(0); 
  const prevMap = () => {
    setCurrentMapIndex((prevIndex) => (prevIndex === 0 ? mapsData.length - 1 : prevIndex - 1));
  };
  const nextMap = () => {
    setCurrentMapIndex((prevIndex) => (prevIndex === mapsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="maps-carousel-container">
      <button className="arrow left-arrow" onClick={prevMap}>⬅</button>
      <div className="map-image-container">
        <img src={mapsData[currentMapIndex].image} alt={mapsData[currentMapIndex].name} className="map-image" />
      </div>
      <button className="arrow right-arrow" onClick={nextMap}>➡</button>
      <div className="map-info">
        <h2 className="map-name">{mapsData[currentMapIndex].name}</h2>
        <p className="map-description">{mapsData[currentMapIndex].description}</p>
      </div>
    </div>
  );
}

export default MapsCarousel;
