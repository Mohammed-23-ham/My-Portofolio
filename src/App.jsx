import './main'

import { Header, Hero, Contant, Contact, Footer } from './Componants/index';

function App() {

  return (
    <>
    <div className="body dm">
      <div className='container dm'>
        <Header />
        <div className="downline"></div>
        <Hero />
        <div className="downline"></div>
        <Contant />
        <div className="downline"></div>
        <Contact />
        <div className="downline"></div>
        <Footer />
        <div className="downline"></div>
      </div>
    </div>
    </>
  )
}

export default App
