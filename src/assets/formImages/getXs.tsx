import X from './x_icon.svg';

export const getXSVG = (use: string) => {
  let svgStyle;
  switch (use) {
    case 'CLOSE':
      svgStyle = { transform: `rotate(0deg)`, fill: `#0070AD` };
      break;
    case 'ADD':
      svgStyle = { transform: `rotate(45deg)` };
      break;
    case 'ADDDisabled':
      svgStyle = { transform: `rotate(45deg)`, filter: `brightness(0) saturate(100%) invert(74%) sepia(0%) saturate(2052%) hue-rotate(27deg) brightness(103%) contrast(71%)`  };
      break;
    case 'REMOVE':
      svgStyle = { transform: `rotate(180deg)`, filter: `grayscale(100%)` };
      break;
    default:
      svgStyle = { transform: `rotate(0deg)` };
      break;
  }
  return <img src={X} alt="X" style={svgStyle} />;
};
export default getXSVG;
