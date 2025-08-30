import { FC, useMemo } from 'react';
import { hexToRgb, rgbToHex } from '@/utils';
import { ColorContainer } from '../ColorContainer/ColorContainer';

interface Props {
  color: string;
  mode: 'shades' | 'tints' | 'tones';
  renderOriginalColor?: boolean;
}

const lastColorRoundCorners = {
  topLeft: false,
  topRight: false,
  bottomLeft: true,
  bottomRight: true
};

const regularColorRoundCorners = {
  topLeft: false,
  topRight: false,
  bottomLeft: false,
  bottomRight: false
};

const steps = 10;

export const ColorTrack: FC<Props> = ({ mode, color, renderOriginalColor = false }) => {
  const colors = useMemo(() => {
    const { r, g, b } = hexToRgb(color);
    const colorsArr: string[] = [];

    for (let i = 0; i < steps; i++) {
      const ratio = i / (steps - 1);

      if (mode === 'shades') {
        // Shades: mix with black
        const nr = Math.round(r * (1 - ratio));
        const ng = Math.round(g * (1 - ratio));
        const nb = Math.round(b * (1 - ratio));
        colorsArr.push(rgbToHex(nr, ng, nb));
      }

      if (mode === 'tints') {
        // Tints: mix with white
        const nr = Math.round(r + (255 - r) * ratio);
        const ng = Math.round(g + (255 - g) * ratio);
        const nb = Math.round(b + (255 - b) * ratio);
        colorsArr.push(rgbToHex(nr, ng, nb));
      }

      if (mode === 'tones') {
        // Tones: mix with gray (128,128,128)
        const nr = Math.round(r + (128 - r) * ratio);
        const ng = Math.round(g + (128 - g) * ratio);
        const nb = Math.round(b + (128 - b) * ratio);
        colorsArr.push(rgbToHex(nr, ng, nb));
      }
    }

    if (!renderOriginalColor) {
      colorsArr.shift();
    }

    return colorsArr;
  }, [color, mode]);

  return (
    <div>
      {colors.map((col, i) => (
        <ColorContainer key={`${col}_${mode}_${i}`} color={col} roundCorners={ i === steps - 1 ? lastColorRoundCorners : regularColorRoundCorners }/>
      ))}
    </div>
  );
}