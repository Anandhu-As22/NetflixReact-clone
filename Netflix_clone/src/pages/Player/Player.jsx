import React, { useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'



const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at: "",
    typeof:""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTllZDI0MTVjNzZmOTE2M2E5NzdiN2FmZjNkZjA5OCIsIm5iZiI6MTc0MjYzNDMxNS4wODksInN1YiI6IjY3ZGU3ZDRiNGFhOTY2Y2U4YzY5YjZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fzlL__N1CorftrXiqyJ1j9ItXFbMjFYJWnC-o4ox19Q'
    }
  };


  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
   
  console.log(apiData)
  


  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder="0" width= '90%' height= '90%' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      
    </div>
  )
}

export default Player
