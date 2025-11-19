import './Contant.css'

export default function Contant() {
  return (
    <div className='contant flex'>
      <h1>My Projects</h1>
      <div className="left-sec">
        <button className="active">All Project</button>
        <button>HTML + CSS</button>
        <button>JavaScript</button>
        <button>React</button>
      </div>
      <div className="right-sec flex">
        {["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"].map((item) => (
          <div key={item} className="card">
            <img src="../../../public/imgs/c1.jpg" alt="" />
            <div className="box">
              <h1 className='title'>title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis distinctio dolorum sit eos cumque ab.</p>
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
