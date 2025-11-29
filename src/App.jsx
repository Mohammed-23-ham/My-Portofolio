import './main'

import { Header, Hero, Contant, Contact, Footer, Scrollbtn } from './Componants/index';
import { useEffect, useState } from 'react';

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY == 0) setShowScrollBtn(0);
      if(window.scrollY == 100) setShowScrollBtn(.5);
      if(window.scrollY == 200) setShowScrollBtn(.7);
      if(window.scrollY > 250) setShowScrollBtn(1);
    })
  })

  return (
    <>
      <div className="body">
        <div className='container' id="up">
          <Header id="header" />
          <div className="downline"></div>
          <Hero id="about" />
          <div className="downline"></div>
          <Contant id="contant" />
          <div className="downline"></div>
          <Contact id="contact" />
          <div className="downline"></div>
          <Footer id="footer" />
          <div className="downline"></div>
        </div>
          <a href='#up' id='' style={{opacity: showScrollBtn}}>
            <Scrollbtn />
          </a>
      </div>
    </>
  )
}

export default App
