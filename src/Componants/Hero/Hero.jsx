import './Hero.css'
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react'

export default function Hero({ id }) {
  const [aniLap, setAniLap] = useState(null)

  useEffect(() => {
    // load animation JSON from public folder at runtime
    fetch('/animation/lap.json')
      .then((r) => r.json())
      .then((json) => setAniLap(json))
      .catch(() => setAniLap(null))
  }, [])

  return (
    <div id={id} className='hero flex'>
      <div className="lsection">
        <div className="parent-avatar flex">
          <img src="/imgs/me.png" alt="" />
          <span className="icon-verified" />
        </div>
        <h1 className="title">Software Designer, Aspiring Student, Specializing in React Fremwork.</h1>
        <p>I'm Mohammed AL-Hamawy, a Software Designer from Syria.
           I was born in 2007. I'm studying at Homs University, Department at Softwar Engineering and I'm still improving my skills. </p>
        <div className="icons flex">
          <a target='_blanck' href='https://www.facebook.com/profile.php?id=61560922022150' className="icon icon-facebook2"></a>
          <a target='_blanck' href='https://www.instagram.com/mohammedalhamawy?igsh=MWdkdXQ4dnUxN2Rldg==' className="icon icon-instagram"></a>
          <a target='_blanck' href='https://github.com/Mohammed-23-ham' className="icon icon-github"></a>
          <a target='_blanck' href='https://linkedin.com/in/mohammed-alhamawy-602926342' className="icon icon-linkedin-square"></a>
        </div>
      </div>
      <div className="rsection animation">{aniLap ? <Lottie animationData={aniLap} /> : null}</div>
    </div>
  )
}
