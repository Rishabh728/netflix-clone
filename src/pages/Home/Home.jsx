import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          
          <p>
            Every bond has a story. Discover the ties that change everything. In a world of secrets, the ties we choose define us. Unravel the ties. Reveal the truth.
          </p>
          <div className="hero-btns">
            <button>
              <img src={play_icon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home