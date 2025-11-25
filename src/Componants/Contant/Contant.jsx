import { useState } from 'react'
import './Contant.css'

const myProjects = [
  { proTitle: "My-accounts", category: "htss", image: '/public/imgs/c1.jpg', mText: "This Page Includes All MY Social Media Accounts.", mLink: '' },
  { proTitle: "To-do-list", category: "react", image: '/public/imgs/c2.jpg', mText: "This Is A React Project To Organize Your To-Do-List.", mLink: '' },
  { proTitle: "Calculator", category: "js", image: '/public/imgs/calculator.jpg', mText: "This Is A Calculator Built With HTML + CSS + JS.", mLink: '' },
  { proTitle: "XO-Game", category: "react", image: '/public/imgs/c3.jpg', mText: "A Fun XO-Game Built with React.", mLink: '' },
  { proTitle: "Template-1", category: "htss", image: '/public/imgs/c4.jpg', mText: "Single-Page Design Built with HTML + CSS.", mLink: '' },
  { proTitle: "Template-2", category: "htss", image: '/public/imgs/c5.jpg', mText: "Single-Page Design Built with HTML + CSS.", mLink: '' },
  { proTitle: "Template-3", category: "htss", image: '/public/imgs/c6.jpg', mText: "Single-Page Design Built with HTML + CSS.", mLink: '' },
  { proTitle: "Template-4", category: "htss", image: '/public/imgs/c7.jpg', mText: "Multi-Page Design Built with HTML + CSS.", mLink: '' },
  { proTitle: "Template-5", category: "js", image: '/public/imgs/c8.jpg', mText: "Single-Page Design Built with HTML + CSS + JS.", mLink: '' },
  { proTitle: "Template-6", category: "js", image: '/public/imgs/c9.jpg', mText: "Single-Page Design Built with HTML + CSS + JS.", mLink: '' }
];

export default function Contant() {
  const [ curActive, setcurActive ] = useState("all");
  return (
    <div className='contant flex'>
      <h1>My Projects</h1>
      <div className="left-sec">
        <button onClick={() => { setcurActive("all") }} className={ curActive === "all" ? "active": null }>All Project</button>
        <button onClick={() => { setcurActive("htss") }} className={ curActive === "htss" ? "active": null } >HTML + CSS</button>
        <button onClick={() => { setcurActive("js") }} className={ curActive === "js" ? "active": null } >JavaScript</button>
        <button onClick={() => { setcurActive("react") }} className={ curActive === "react" ? "active": null } >React</button>
      </div>
      <div className="right-sec flex">
        { myProjects.map((item) => (
          <div key={item.proTitle} className="card">
            <img src={item.image} alt="" />
            <div className="box">
              <h1 className='title'>{item.proTitle}</h1>
              <p>{item.mText}</p>
              <div className="last flex">
                <div className="icons flex">
                  <div className="icon-link"></div>
                  <div className="icon-github"></div>
                </div>
                <a href="" className='flex'>More
                  <span className='icon-arrow-right'></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
