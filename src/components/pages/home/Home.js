import React from 'react'
import Container from './sections/Container'
import Header from './Header/Header'
import Firts from './sections/childrens/Firts'
import Second from './sections/childrens/Second'
import Third from './sections/childrens/Third'



const Home = () => {
  return (
    <div className='mybg'>
      <Header />
      <Container id="home" first={true}> <Firts /> </Container>
      <Container id="about" > <Second /> </Container>
      <Container id="links" > <Third /></Container>
    </div>
  )
}

export default Home