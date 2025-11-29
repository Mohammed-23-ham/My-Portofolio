import './Linkmenu.css'

export default function Linkmenu({ open = false, onLinkClick }) {
    // If `open` is true we remove the 'dnune' class; otherwise keep it
    const classes = `menu ${open ? '' : 'dnune'}`.trim()

    return (
        <>
            <div className={classes}>
                <span className='xbtn icon-remove' onClick={onLinkClick}></span>
                <ul>
                    <li className='link'><a href="#About" onClick={onLinkClick}>About</a></li>
                    <span className="downline"></span>
                    <li className='link'><a href="#contant" onClick={onLinkClick}>Projects</a></li>
                    <span className="downline"></span>
                    <li className='link'><a href="#contact" onClick={onLinkClick}>Contact</a></li>
                    <span className="downline"></span>
                    <li className='link'><a href="#footer" onClick={onLinkClick}>Footer</a></li>
                </ul>
            </div>

        </>
    )
}
