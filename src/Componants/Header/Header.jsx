import { useEffect, useState } from 'react'
import { Linkmenu } from '../index'
import './Header.css'

export default function Header({ id }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mod, setmod] = useState(localStorage.getItem("curMode") || "lm");
  useEffect(() => {
    if(mod === "lm") {
      document.body.classList.remove("dm");
      document.body.classList.add("lm");
    }
    if(mod === "dm") {
      document.body.classList.remove("lm");
      document.body.classList.add("dm");
    }
  }, [mod])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header id={id} className='flex'>
      <div className="button">
        <button className="menubtn icon-menu" onClick={() => setMenuOpen(prev => !prev)}>
        </button>
        <Linkmenu open={menuOpen} onLinkClick={closeMenu} />
      </div>
      <nav>
        <ul className='flex'>
          <li><a href="#about">About</a></li>
          <li><a href="#contant">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>
      </nav>
      <button onClick={() => {
        localStorage.setItem("curMode", mod === "dm" ? "lm" : "dm");

        setmod((localStorage.getItem("curMode")));
      }}
        className={document.body.classList.contains("dm") ? "icon-moon-stroke" : "icon-sun-stroke"}>
      </button>
    </header>
  )
}
