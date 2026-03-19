import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
       <Header />
       <Slider />
       <ProductionHouse />
       <GenreMovieList />
       <Footer />
      </div>
    </>
  )
}

export default App
