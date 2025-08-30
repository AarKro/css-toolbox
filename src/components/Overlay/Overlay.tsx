import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import eyeDropperIcon from '@/assets/eyeDropper.svg';
import { ColorTrack } from '../ColorTrack/ColorTrack';
import { ColorContainer } from '../ColorContainer/ColorContainer';
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

  const overlayClasses = classNames('overlay', {
    'overlay-open': isOpen,
    'eye-dropper-active': eyeDropperActive
  });

  const contentClasses = classNames('content', {
    'content-shown': isOpen
  });

  return (
    <article id='css-toolbox-overlay' className={overlayClasses}>
      <div id='css-toolbox-content' className={contentClasses}>
        <nav className='navigation'>
          <img src={eyeDropperIcon} alt="Eye Dropper Icon" onClick={handleEyeDropperClick}/>
        </nav>

        <ColorContainer color={eyeDropperColor} roundCorners={{
          topLeft: true,
          topRight: true,
          bottomLeft: false,
          bottomRight: false
        }}/>

        <div className='color-tracks'>
          <ColorTrack color={eyeDropperColor} mode="tints" />
          <ColorTrack color={eyeDropperColor} mode="shades" />
          <ColorTrack color={eyeDropperColor} mode="tones" />
        </div>
      </div>
    </article>
  );
};