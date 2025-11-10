import './Linkmenu.css'
import { FaX } from 'react-icons/fa';

export default function Linkmenu({ open = false, onLinkClick }) {
    const classes = `menu ${open ? '' : 'dnune'}`.trim()

    return (
        <>    
            <div className={classes}>
                <span className='xbtn' onClick={onLinkClick}>
                    <FaX />
                    </span>
                <ul>
                    <li className='link'><a href="#" onClick={onLinkClick}>About</a></li>
                    <span className="downline"></span>
                    <li className='link'><a href="#" onClick={onLinkClick}>Articles</a></li>
                    <span className="downline"></span>
                    <li className='link'><a href="#" onClick={onLinkClick}>Projects</a></li>
                    <span className="downline"></span>
                    <li className='link'><a href="#" onClick={onLinkClick}>Speaking</a></li>
                    <span className="downline"></span>
                    <li className='link'><a href="#" onClick={onLinkClick}>Contact</a></li>
                </ul>
            </div>
            
        </>
    )
}
