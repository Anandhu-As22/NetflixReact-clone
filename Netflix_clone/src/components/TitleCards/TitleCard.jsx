import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'



const TitleCard = ({title,category}) => {

  const [apiData, setApiData] = useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTllZDI0MTVjNzZmOTE2M2E5NzdiN2FmZjNkZjA5OCIsIm5iZiI6MTc0MjYzNDMxNS4wODksInN1YiI6IjY3ZGU3ZDRiNGFhOTY2Y2U4YzY5YjZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fzlL__N1CorftrXiqyJ1j9ItXFbMjFYJWnC-o4ox19Q'
    }
  };
  
  

  const handleWheel =(event)=>{
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category ? category:'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    

    cardsRef.current.addEventListener('wheel',handleWheel)
  } ,[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"popular on Netfilx"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
        })}
      </div>
      
    </div>
  )
}

export default TitleCard
