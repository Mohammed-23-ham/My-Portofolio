import './Footer.css'

export default function Footer({ id }) {
  return (
    <div id={id} className='footer flex'>
      <ul className='flex'>
        <li><a href="#about">About</a></li>
        <li><a href="#contant">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p>2025 © Devilopd By Mohammed Al_Hamawy. All Right Reserved.</p>
    </div>
  )
}
