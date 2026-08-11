import React from 'react'
import { HomePage } from './components/HomePage';
import { About } from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <h3>Welcome Home Page</h3>
      <HomePage/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App