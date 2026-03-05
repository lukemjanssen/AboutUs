import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Team from './components/Team'
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
          <Team />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
