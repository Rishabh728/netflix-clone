import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCArds = ({ title, category }) => {
  
  const [apiData, setApiData]=useState([])

  const cardsRef = useRef();

  // ! API start

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGVlYThjZjFlMjdlNGM3ZDZkZTRjZThlOGY0Yzc0MiIsIm5iZiI6MTc1NDEwODc2MS45ODU5OTk4LCJzdWIiOiI2ODhkOTM1OWY3NDEwNDU1NmEyNjE0Y2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59gfqxw_P4poEMeTJi5Ps-1wqfosaLg29mWfTyZMsfI'
  }
  };
  
  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
    cardsRef.current.addEventListener("wheel", handlewheel);
  }, []);


  return (
    <div className="title-cards">
      <h2>{ title?title:'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/original/`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCArds;
