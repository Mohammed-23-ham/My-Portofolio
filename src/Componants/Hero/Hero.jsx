import './Hero.css'
import Lottie from 'lottie-react';
import aniLap from '../../../public/animation/lap.json'

export default function Hero({ id }) {
  return (
    <div id={id} className='hero flex'>
      <div className="lsection">
        <div className="parent-avatar flex">
          <img src="/public/imgs/me.png" alt="" />
          <span className="icon-verified" />
        </div>
        <h1 className="title">Software Designer, Aspiring Student, Specializing in React Fremwork.</h1>
        <p>I'm Mohammed AL-Hamawy, a Software Designer from Syria.
           I was born in 2007. I'm studying at Homs University, Department at Softwar Engineering and I'm still improving my skills. </p>
        <div className="icons flex">
          <a href='https://www.facebook.com/profile.php?id=61560922022150' className="icon icon-facebook2"></a>
          <a href='https://www.instagram.com/mohammedalhamawy?igsh=MWdkdXQ4dnUxN2Rldg==' className="icon icon-instagram"></a>
          <a href='https://github.com/Mohammed-23-ham' className="icon icon-github"></a>
          <a href='https://linkedin.com/in/mohammed-alhamawy-602926342' className="icon icon-linkedin-square"></a>
        </div>
      </div>
      <div className="rsection animation"><Lottie animationData={aniLap} /></div>
    </div>
  )
}
