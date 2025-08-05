import React, { useEffect, useState } from 'react';
import './Player.css';
import black_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const navigate = useNavigate();

  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: '',
    key: "",
    published_at: '',
    type:''
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGVlYThjZjFlMjdlNGM3ZDZkZTRjZThlOGY0Yzc0MiIsIm5iZiI6MTc1NDEwODc2MS45ODU5OTk4LCJzdWIiOiI2ODhkOTM1OWY3NDEwNDU1NmEyNjE0Y2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.59gfqxw_P4poEMeTJi5Ps-1wqfosaLg29mWfTyZMsfI'
  }
};

  useEffect(() => {
  
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])

  return (
    <div className='player'>
      <img src={black_arrow_icon} alt="Back" onClick={() => {
        navigate(-2)
        
      }} />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        width="90%"
        height="90%"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{ apiData.published_at}</p>
        <p>{ apiData.name}</p>
        <p>{ apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
