import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO SARATHI- THE GUIDING HAND' title="Crack IIT-JEE & NEET with India's Finest Mentors in Mainpuri" />
            <p>Join SARATHI - THE GUIDING HAND - Where Concepts Are Crafted, Not Just Taught.</p>
            <div className='button'>
              <button className='primary-btn'>
              CONCEPT-DRIVEN <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
               RESULTS-ORIENTED <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
