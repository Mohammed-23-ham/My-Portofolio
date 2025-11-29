import { useState } from 'react'
import './Contant.css'
import { allProjects } from './projects';

export default function Contant({ id }) {
  const [curActive, setcurActive] = useState("all");
  const [arr, setArr] = useState(allProjects);
  const filterBtn = (btnCategory) => {
    setcurActive(btnCategory);
    const newArr = allProjects.filter((item) => {
      return item.category === btnCategory;
    })
    setArr(newArr);
  }

  return (
    <div id={id} className='contant flex'>
      <h1>My Projects</h1>
      <div className="left-sec">
        <button onClick={() => { setcurActive("all"); setArr(allProjects) }} className={curActive === "all" ? "active" : null}>All Project</button>
        <button onClick={() => {
          filterBtn("htss");
        }} className={curActive === "htss" ? "active" : null} >HTML + CSS</button>
        <button onClick={() => {
          filterBtn("js");
        }} className={curActive === "js" ? "active" : null} >JavaScript</button>
        <button onClick={() => {
          filterBtn("react");
        }} className={curActive === "react" ? "active" : null} >React</button>
      </div>
      <div className="right-sec flex">
        {arr.map((item) => (
          <div key={item.proTitle} className="card">
            <img src={item.image} alt="" />
            <div className="box">
              <h1 className='title'>{item.proTitle}</h1>
              <p>{item.mText}</p>
              <div className="last flex">
                <div className="icons flex">
                  <a className="firest icon-link"></a>
                  <a className="firest icon-github" target='_blank' href={item.gitLink}></a>
                </div>
                <a href="" className='more flex'>Visit
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
