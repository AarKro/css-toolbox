import { FC } from 'react';
import classNames from 'classnames';
import './ColorContainer.css';

interface Props {
  color: string;
  tint?: number;

  roundCorners?: {
    topLeft: boolean;
    topRight: boolean;
    bottomLeft: boolean;
    bottomRight: boolean;
  };
}

export const ColorContainer: FC<Props> = ({
  color,
  roundCorners = {
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false
  }
}) => {
  const colorContainerClassNames = classNames('color-container', {
    'rounded-tl': roundCorners.topLeft,
    'rounded-tr': roundCorners.topRight,
    'rounded-bl': roundCorners.bottomLeft,
    'rounded-br': roundCorners.bottomRight
  });

  return (
    <div className={colorContainerClassNames} style={{ backgroundColor: color }}>
      {color}
    </div>
  );
}