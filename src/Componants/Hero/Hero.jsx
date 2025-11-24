import './Hero.css'
import Lottie from 'lottie-react';
import aniLap from '../../../public/animation/lap.json'

export default function Hero() {
  return (
    <div className='hero flex'>
      <div className="lsection">
        <div className="parent-avatar flex">
          <img src="/public/imgs/me.png" alt="" />
          <span className="icon-verified" />
        </div>
        <h1 className="title">Software Designer, Aspiring Student, Specializing in React Fremwork.</h1>
        <p>I'm Mohammed AL-Hamawy, a Software Designer from Syria.
           I was born in 2007. I'm studying at Homs University, Department at Softwar Engineering and I'm still improving my skills. </p>
        <div className="icons flex">
          <div className="icon icon-x1"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="rsection animation"><Lottie animationData={aniLap} /></div>
    </div>
  )
}
