import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import VideoPlayer from './Component/VideoPlayer/VideoPlayer'

function App() {
  const [playState, setPlayState] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'/>
      <Programs />
      <About setPlayState={setPlayState}/>
      <Title subtitle='Gallery' title='Campus Photo'/>
      <Campus />
      <Title subtitle='TESTIMONIAL' title='What Student Says'/>
      <Testimonials />
      <Title subtitle='CONTACT US' title='Get in Touch'/>
      <Contact />
      <Footer />
      </div>
      <VideoPlayer playState={playState}  setPlayState={setPlayState}/>
    </>
  )
}

export default App
