import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Heroes.css"; 

function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRole, setSelectedRole] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState(""); 

  const location = useLocation(); 

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get("https://marvelrivalsapi.com/api/v1/heroes", {
          headers: {
            "x-api-key": "0358e39dd09c42f7ea590f930a54b520b7fdd6317b17fe1ee92b51d2e8e2415b",
            "Accept": "application/json",
          },
        });

        setHeroes(response.data);
      } catch (err) {
        console.error("Error al obtener los héroes:", err);
        setError("Error al cargar los datos. Inténtalo de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search"); 
    if (query) {
      setSearchQuery(query.toLowerCase()); 
    } else {
      setSearchQuery(""); 
    }
  }, [location.search]);

  const getHeroImage = (heroName) => {
    const formattedName = heroName.toLowerCase().replace(/\s+/g, "-");
    return `/imagenesheroes/${formattedName}.png`;
  };

  const filteredHeroes = heroes.filter(hero => {
    const matchesRole = selectedRole === "Todos" || hero.role === selectedRole;
    const matchesSearch = searchQuery === "" || hero.name.toLowerCase().includes(searchQuery);
    return matchesRole && matchesSearch;
  });

  return (
    <div className="app-container">
      <aside className="hero-sidebar">
        <h3>Filter by role:</h3>
        <select onChange={(e) => setSelectedRole(e.target.value)} value={selectedRole}>
          <option value="Todos">All</option>
          <option value="Vanguard">Vanguard</option>
          <option value="Duelist">Duelist</option>
          <option value="Strategist">Strategist</option>
        </select>
      </aside>

      <div className="heroes-container">
        <h1 className="titulo">Heores and Villains</h1>
        {loading && <p>Cargando héroes...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="heroes-list">
          {filteredHeroes.length > 0 ? (
            filteredHeroes.map((hero) => (
              <div key={hero.id} className="hero-card">
                <img src={getHeroImage(hero.name)} alt={hero.name} className="hero-image"/>

                <div className="hero-info">
                  <h2 className="hero-name">{hero.name} <span className="hero-role">({hero.role})</span></h2>
                  <p><strong>Real name:</strong> {hero.real_name}</p>
                  <p className="hero-lore">
                    <strong>History:</strong> {hero.lore} </p>
                </div>
              </div>
            ))
          ) : (
            <p>No hay héroes disponibles en esta categoría.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Heroes;
