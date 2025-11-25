import React from "react"
// import logoImg from "../../../../public/images/Concept_crafter.jpeg"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          {/* Logo Image */}
          <div className="concept_logo">
            <img src="/images/design3.png" alt="Concept Crafter Academy Logo" />
          </div>

          <div className='logo'>
            <h1>SARATHI</h1>
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}
            <h3>THE GUIDING HAND</h3>

          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
