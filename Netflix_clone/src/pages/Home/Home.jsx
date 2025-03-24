import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_tittle from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/Footer'





const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="" className='banner-img'/>
            <div className="hero-caption">
                <img src={hero_tittle} alt="" className='caption-img'/>
                <p>Discovering his ties to a secret ancient order,a young man living
                    in modern Istanbul embarks on a quest to save the city from 
                    an immortral enemy.
                </p>
                <div className="hero-btns">
                    <button className='btn'><img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />more info</button>
                </div>
                <TitleCard/>
            </div>
        </div>
        <div className="more-cards">
            <TitleCard title={"Top Rated"} category={'top_rated'}/>
            <TitleCard title={"popular"} category={'popular'}/>
            <TitleCard title={"upcoming"} category={"upcoming"}/>
            <TitleCard title={"Top picks for you"} category={"upcoming"}/>

        </div>
        <Footer/>
    </div>
  )
}

export default Home
