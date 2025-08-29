import { FC, useEffect, useState } from 'react';
import eyeDropperIcon from '@/assets/eyeDropper.svg';
import './Overlay.css';

export const Overlay: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eyeDropperActive, setEyeDropperActive] = useState(false);
  const [eyeDropperColor, setEyeDropperColor] = useState('#ffffff');

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleEyeDropperClick = () => {
    setEyeDropperActive(true);
    const eyeDropper = new (window as any).EyeDropper();
    eyeDropper.open()
    .then((result: any) => {
      setEyeDropperColor(result.sRGBHex);
      setEyeDropperActive(false);
    })
    .catch((e: any) => {
      console.error(e);
      setEyeDropperActive(false);
    });
  };

  return (
    <article id='css-toolbox-overlay' className={`overlay ${isOpen ? 'overlay-open' : ''} ${eyeDropperActive ? 'eye-dropper-active' : ''}`}>
      <div id='css-toolbox-content' className={`content ${isOpen ? 'content-shown' : ''}`}>
        <nav className='navigation'>
          <img src={eyeDropperIcon} alt="Eye Dropper Icon" onClick={handleEyeDropperClick}/>
        </nav>

        <br/>

        <div style={{ backgroundColor: eyeDropperColor, borderRadius: '5px', width: '100px', height: '100px' }}>
          {eyeDropperColor}
        </div>
      </div>
    </article>
  );
};