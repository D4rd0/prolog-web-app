import React, { ReactNode } from 'react';
import getArrowSVG from '../../../assets/arrows/arrows';
import './inputFilterButton.css';
interface Props {
  inputName: string;
  isClicked: boolean;
  handleClick: () => void;
  children?: ReactNode;
}
export const InputFilterButtom: React.FC<Props> = (props) => {
  const { inputName, isClicked, handleClick, children } = props;

  return (
    <>
      <button className="buttonStyle" onClick={handleClick}>
        {inputName}
        {getArrowSVG(isClicked ? 'up' : 'down')}
      </button>
      {isClicked ? <div className="dropdown-content">{children}</div> : null}
    </>
  );
};

export default InputFilterButtom;
