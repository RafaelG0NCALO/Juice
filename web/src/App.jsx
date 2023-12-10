import React, { useRef, useState } from 'react';
import './App.css';
import can from './assets/Can.png';
import labels from './assets/Labels.png';
import pear from './assets/pear.png';
import pears from './assets/Pear2.png';
import apple from './assets/apple.png';
import apples from './assets/apples.png';
import exotic from './assets/exotic.png';
import exotics from './assets/exotics.png';
import folha2 from './assets/folha2.png';
import folha1 from './assets/folha1.png';

function App() {
  const contentMockupRef = useRef(null);
  const [labelsPosition, setLabelsPosition] = useState(0);
  const [pearsPosition, setPearsPosition] = useState(0);

  const handleButtonClick = () => {
    if (contentMockupRef.current) {
      const nextScrollLeft = contentMockupRef.current.scrollLeft + window.innerWidth;
      contentMockupRef.current.scrollTo({
        left: nextScrollLeft >= contentMockupRef.current.scrollWidth ? 0 : nextScrollLeft,
        behavior: 'smooth',
      });
      setLabelsPosition(labelsPosition === 0 ? -313 : labelsPosition === -313 ? -626 : 0);
    }
  };

  return (
    <>
    <header>
      <div className="contendheader">
      <h1>Fruity</h1>
      <nav className='nav'>
        <a href="">Shop</a>
        <a href="">About</a>
        <a href="">Careers</a>
        <a href="">Partnership</a>
        <a href="">Contact</a>
      </nav>
      <div className='profile'>
        <a href="">My Cart</a>
        |
        <a href="">Register</a>
      </div>
      </div>
    </header>
      <div className='contentcontainer' ref={contentMockupRef}>
        <div className='contentMockup'>
          <div className="folha">
            <img src={folha2} alt="Can" className='folha2' />
          </div>
          <div className="mask1">
            <img className="labels" style={{ left: labelsPosition + 'px' }} src={labels} alt="Labels" />
            <img src={can} alt="Can" />
          </div>
          <div className="folha">
             <img src={folha1} alt="Can" className='folha1' />
          </div>
          <div className="buttonContent">
            <button onClick={handleButtonClick}>Shop Taste</button>
          </div>
        </div>

          <div className="containerbg">
            <img src={pear} alt="" />
            <img src={pears} alt="" className={`${pearsPosition ? 'pears' : 'pears active'}`} />
          </div>
          <div className="containerbg">
            <img src={apple} alt="" />
            <img src={apples} alt="" />
          </div>
          <div className="containerbg">
            <img src={exotic} alt="" />
            <img src={exotics} alt="" />
          </div>

      </div>
    </>
  );
}

export default App;
