import React from 'react'
import PortfolioHero from '../PortfolioComponents/PortfolioHero'
import BookMark from '../PortfolioComponents/BookMark'
import Insure from '../PortfolioComponents/Insure'
import Fylo from '../PortfolioComponents/Fylo'
import PortText from '../PortfolioComponents/PortText'

function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <BookMark />
      <Insure />
      <Fylo />
      <PortText />
    </main>
  )
}

export default PortfolioPage
