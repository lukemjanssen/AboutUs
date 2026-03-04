import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="content-wrap">
          <Hero />
          <Statistics />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
