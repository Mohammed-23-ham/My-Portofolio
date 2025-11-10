import { Linkmenu } from '../index'
import './Header.css'
import { useState } from 'react'
import { FaMoon, FaSun, FaList } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className='flex'>
      <div className="button">
        <button className="menubtn" onClick={() => setMenuOpen(prev => !prev)}>
          <FaList />
        </button>
        <Linkmenu open={menuOpen} onLinkClick={closeMenu} />
      </div>
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button>
        <FaSun />
      </button>
    </header>
  )
}
