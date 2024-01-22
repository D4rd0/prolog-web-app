import UP from './up.svg';

export const getArrowSVG = (deg: string) => {
  let svgStyle;
  switch (deg) {
    case 'up':
      svgStyle = { transform: `rotate(0deg)` };
      break;
    case 'down':
      svgStyle = { transform: `rotate(180deg)` };
      break;
    default:
      svgStyle = { transform: `rotate(0deg)` };
      break;
  }
  return <img src={UP} alt="Arrow" style={svgStyle} />;
};
export default getArrowSVG;
