import React from 'react'
import All from '../components/All'
import Categories from '../components/Categories'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'


const sectionStyle = {
    height:"100vh", 
    fontSize:"20px", 
    fontWeight:"bold"
}
const sectionStyle2 = {
    height:"70vh", 
    fontSize:"20px", 
    fontWeight:"bold"
}
const sectionStyle3 = {
    height:"60vh", 
    fontSize:"20px", 
    fontWeight:"bold",
    backgroundColor: '#FC984F'
}

const Landing = () => {
  return (
    <div>
        <Navbar/>

        <div style={sectionStyle} id='Home' >
            <Welcome/>
        </div>

        <div style={sectionStyle2} id='All' >
            <All/>
        </div>

        <div style={sectionStyle} id='Categories' >
            <Categories/>
        </div>

        <div style={sectionStyle3} id='Contact Us' >
            <ContactUs/>
        </div>

        <Footer/>
    </div>
  )
}

export default Landing