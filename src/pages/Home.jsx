import React from 'react'
import Navbar from '../components/navbar'
import IntroAnimation from '../components/introanimation'
import Hero from '../components/hero'
import Legacy from '../components/legacy'
import Career from '../components/Career'
import Records from '../components/Records'
import Trophies from '../components/Trophies'
import Mentality from '../components/mentality'
import GoalArchive from '../components/goalArchive'
import FanZone from '../components/FanZone'

const Home = () => {
  return (
    <div>
      <IntroAnimation />
      <Navbar />
      <Hero />
      <Legacy />
      <Career />
      <Records />
      <Trophies />
      <Mentality />
      <GoalArchive />
      <FanZone />
    </div>
  )
}

export default Home