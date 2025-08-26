import { FC, useEffect, useState } from 'react';
import './Overlay.css';

export const Overlay: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <article id='css-toolbox-overlay' className={`overlay ${isOpen ? 'overlay-open' : 'overlay-closed'}`}>
      <div id='css-toolbox-content' className={`content ${isOpen ? 'content-shown' : 'content-hidden'}`}>
        <p>This is an overlay component.</p>
      </div>
    </article>
  );
};