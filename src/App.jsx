import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="content-wrap">
          <Hero />

        </div>
      </div>
    </>
  )
}

export default App
