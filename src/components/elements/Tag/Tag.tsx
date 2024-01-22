import { Chip } from '@mui/material';
import React, { useState, useEffect } from 'react';
import getTagSVG from '../../../assets/categories/categories';
import './Tag.css';

interface Tag {
  name: string;
  selected: boolean;
  handleTagsInList?: (tagName: string) => void;
  isSelectable: boolean;
  color: string;
}

export const Tag: React.FC<Tag> = (props) => {
  const { name, selected, handleTagsInList, isSelectable, color } = props;

  const [selectedColor, setSelectedColor] = useState<boolean>(selected);

  const handleClick = () => {
    setSelectedColor(!selectedColor);
    handleTagsInList && handleTagsInList(name);
  };

  useEffect(() => {
    setSelectedColor(selected);
  }, [selected]);

  return (
    <>
      <Chip
        id="chip_tag"
        label={name.toUpperCase()}
        avatar={
          <img
            src={getTagSVG(name)}
            alt="Person Icon"
            style={{ width: '0.75rem', height: '0,75rem', marginLeft: '-0.313rem'}}
          ></img>
        }
        onClick={isSelectable ? handleClick : undefined}
        style={{
          borderColor: color,
          background: color,
          color: '#000000',
        }}
      />
    </>
  );
};
