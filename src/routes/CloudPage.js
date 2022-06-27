import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Cloud from '../components/Cloud/Cloud'
import Data from '../components/Data/Data'
import Footer from '../components/Footer/Footer'
import Recovery from '../components/Recovery/Recovery'

const CloudPage = () => {
  return (
    <>
      <Navbar />
      <Cloud />
      <Data />
      <Recovery />
      <Footer />
    </>
  )
}

export default CloudPage
