import './main'

import { Header, Hero, Contant, Contact, Footer, Scrollbtn } from './Componants/index';

function App() {

  return (
    <>
      <div className="body dm">
        <div className='container dm' id="up">
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
        <a href="#up" id="">
          <Scrollbtn />
        </a>
      </div>
    </>
  )
}

export default App
