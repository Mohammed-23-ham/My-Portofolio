import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react'

export default function Contact({ id }) {
  const [state, handleSubmit] = useForm("mjkzjzan");
  const [aniMassage, setAniMassage] = useState(null)
  const [donMassage, setDonMassage] = useState(null)

  useEffect(() => {
    fetch('/animation/mas.json')
      .then(r => r.json())
      .then(json => setAniMassage(json))
      .catch(() => setAniMassage(null))

    fetch('/animation/done.json')
      .then(r => r.json())
      .then(json => setDonMassage(json))
      .catch(() => setDonMassage(null))
  }, [])

  return (
    <div id={id} className='contact'>
      <h1 className='title'>
        <span className='icon-envelope-open'></span> Contact Me
      </h1>
      <p className='subtitle'>Contact Me For More Information Or Help.</p>
      <div className="container flex">
        <form onSubmit={handleSubmit} action="" className='flex'>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="email" id="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea name="message" id="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className='submit'>{state.submitting ? "Wait..." : "Submit"}</button>
          <div>{state.succeeded && ( <h1>{donMassage ? <span><Lottie animationData={donMassage} style={{ width: "45px" }} /></span> : null} Thanks for Massage!</h1>) }</div>
        </form>
        <div className="animation">{aniMassage ? <Lottie animationData={aniMassage} /> : null}</div>
      </div>
    </div>
  )
}
