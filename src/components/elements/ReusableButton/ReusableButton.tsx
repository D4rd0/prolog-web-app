import './ReusableButton.css';

import { ReusableButton as RB } from '../../../models/ReusableButton.ts';
import Colors from '../../../assets/colors.tsx';

export const ReusableButton: React.FC<RB> = (reusableButton) => {
  const { className, label, isActive, onClick, img } = reusableButton;
  const buttonStyle = isActive
    ? {
        backgroundColor: Colors.tags.light_mode_blue,
        color: Colors.tags.white,
        outline: 'none',
      }
    : isActive === false
    ? {
        backgroundColor: Colors.tags.white,
        color: Colors.tags.light_mode_blue,
        outline: 'none',
      }
    : {};

  return (
    <button
      className={className}
      type="submit"
      style={buttonStyle}
      onClick={onClick}
    >
      <img src={img} alt={img} />
      <span>{label}</span>
    </button>
  );
};

export default ReusableButton;
