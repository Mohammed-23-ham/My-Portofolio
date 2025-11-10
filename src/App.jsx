import './App.css'

import { Header, Hero, Contant, Contact, Footer } from './Componants/index';

function App() {

  return (
    <>
    <div className="body dm">
      <div className='container dm'>
        <Header />
        <div className="downline"></div>
        <Hero />
        <Contant />
        <Contact />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
