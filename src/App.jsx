import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="content-wrap">
          <Hero />
          <Statistics />
          <Team />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
