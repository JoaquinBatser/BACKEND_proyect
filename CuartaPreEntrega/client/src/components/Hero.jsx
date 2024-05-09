import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="snap-start grid grid-rows-3 h-screen bg-red-900 w-full">
      <div className="flex pt-11 items-center justify-between px-24">
        <h2 className="row-span-1 font-bold text-5xl">aPhone</h2>
        <h3>Designed for you</h3>
      </div>
      <div className="bg-black row-span-2"></div>
    </section>
  )
}

export default Hero
