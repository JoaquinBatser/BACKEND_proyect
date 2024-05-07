import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
      <div>
        <h1>
          TECH.
          <br />
          AMPLIFIED
        </h1>
        <p>
          Explore our curated collection of tech accessories designed for
          seamless functionality and lasting value.
        </p>
        <NavLink to="/products">
          <button>Find your accesories</button>
        </NavLink>
      </div>
      <div>h</div>
    </section>
  )
}

export default Hero
