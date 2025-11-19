import './Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
      <h1 className='title'>
        <span className='icon-envelope-open'></span> Contact Me
      </h1>
      <p className='subtitle'>Contact Me For More Information Or Help.</p>
      <div className="container flex">
        <form action="" className='flex'>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="" id="email" />
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea name="" id="message"></textarea>
          </div>
          <button className='submit'>Submit</button>
        </form>
        <div className="animation">ANIMATION</div>
      </div>
    </div>
  )
}
