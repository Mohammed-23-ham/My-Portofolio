import './Linkmenu.css'

export default function Linkmenu({ open = false, onLinkClick }) {
    // If `open` is true we remove the 'dnune' class; otherwise keep it
    const classes = `menu ${open ? '' : 'dnune'}`.trim()

    return (
        <>    
            <div className={classes}>
                <span className='xbtn icon-remove' onClick={onLinkClick}></span>
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
