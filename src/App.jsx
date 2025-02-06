import './App.scss'
import About from './components/About/About'
import Advanteges from './components/Advanteges/Advanteges'
import Contact from './components/Contacts/Contact'
import Empower from './components/Emprower/Empower'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Innovate from './components/Innovate/Innovate'
import Prices from './components/Prices/Prices'
import Swipper from './components/Swipper/Swipper'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Gallery/>
      <Swipper/>
      <Empower/>
      <Advanteges/>
      <Prices/>
      <Innovate/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
