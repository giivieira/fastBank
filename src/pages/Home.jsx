import React from 'react'
import Header from '../components/Header/index'
import Presentation from '../components/Presentation/index'
import Counts from '../components/Counts/index'
import Phone from '../components/Phone'
import Card from '../components/Card/index'
import '../components/Card/style.css'
import Footer from '../components/Footer'
import imageCard1 from '../assets/imageCard1.jpg'
import imageCard2 from '../assets/imageCard2.jpg'
import imageCard3 from '../assets/imageCard3.jpg'

function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Counts />
      
      <div className='cards'>
        <Card
          title='TRIPS'
          imageUrl={imageCard1}
          body='Make your trips with partner agencies of Ease Bank and get unmissable discounts and lots of points' />
        <Card
          title='INSUREANCE'
          imageUrl={imageCard2}
          body='Exclusive insurance plans for your well-being and that of your entire family.' />
        <Card
          title='INVESTMENTS'
          imageUrl={imageCard3}
          body='Invest your money in the right way, with expert support and get the best results.' />
      </div>
      <Phone />
      <Footer />

    </>

  )
}

export default Home