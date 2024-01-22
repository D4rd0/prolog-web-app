import React, { useEffect, useState } from 'react';
import InputFilterButtom from '../InputFilterButtom/InputFilterButtom';
import './Dropdown.css';

interface Props {
  type: string;
  valueList: string[];
  setMultyCategory?: (categoriesSelected: string[]) => void;
  setCategory?: (categorySelected: string) => void;
}
export const Dropdown: React.FC<Props> = (props) => {
  const { type, valueList, setMultyCategory, setCategory } = props;
  const [selectedValues, setselectedValues] = useState<string[]>([]);
  const [selectedValue, setselectedValue] = useState<string>('');

  const handleCategoryChange = (selectorValue: string) => {
    if (!selectedValues.includes(selectorValue)) {
      setselectedValues([...selectedValues, selectorValue]);
      console.log('added', selectorValue);
    } else {
      console.log('remove');
      const newList = selectedValues.filter((value) => value !== selectorValue);
      setselectedValues(newList);
    }
  };

  useEffect(() => {
    console.log(selectedValues);
    setMultyCategory ? setMultyCategory(selectedValues) : null;
    setCategory ? setCategory(selectedValue) : null;
  }, [selectedValues, setMultyCategory, setCategory, selectedValue]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  switch (type) {
    case 'categoryMulty':
      return (
        <div>
          <InputFilterButtom
            inputName="Select Categories"
            isClicked={isClicked}
            handleClick={handleClick}
          >
            {valueList.map((selectorValue: string, index) =>
              selectorValue !== null ? (
                <div style={{ backgroundColor: 'white' }}>
                  <option
                    key={index}
                    value={selectorValue}
                    onClick={() => {
                      handleCategoryChange(selectorValue);
                    }}
                    style={{
                      padding: '5px',
                      paddingLeft: '10px',
                      margin: '5px',
                      boxShadow: 'rgba(67, 79, 89, 0.2)',
                      border: 'none',
                      fontWeight: selectedValues.includes(selectorValue)
                        ? '400'
                        : undefined,
                      color: selectedValues.includes(selectorValue)
                        ? '#272936'
                        : '#707070',
                      backgroundColor: selectedValues.includes(selectorValue)
                        ? 'rgba(212, 240, 255, 0.6)'
                        : 'white',
                      fontFamily: 'Ubuntu',
                    }}
                  >
                    {selectorValue}
                    {selectedValues.includes(selectorValue) ? '\u2714' : ''}
                  </option>
                </div>
              ) : (
                <></>
              ),
            )}
          </InputFilterButtom>
        </div>
      );
      break;
    case 'category':
      return (
        <select
          placeholder="Select category"
          onChange={(event) => {
            setselectedValue(event.target.value);
            event.target.setCustomValidity('');
          }}
          onInvalid={(event) => {
            const inputElement = event.target as HTMLInputElement;
            inputElement.setCustomValidity('Category is a required field');
          }}
          required
          className="category-select"
        >
          {selectedValue === '' ? (
            <option value="" disabled selected>
              Select category
            </option>
          ) : null}

          {valueList.map((category) => (
            <option className="dropdown" key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      );

      break;
    case 'date':
      return <div className="dropdown"></div>;
    default:
      break;
  }
  return <div></div>;
};

//'#D4F0FF'

export default Dropdown;
