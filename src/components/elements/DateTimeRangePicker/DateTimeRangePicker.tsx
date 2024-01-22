import React, { useState, useRef } from 'react';
import './DateTimeRangePickerStyle.css';
import moment from 'moment';
interface DateTimeRangePickerProps {
  setDate: (date: string) => void;
  setTimeStart: (time: string) => void;
  setTimeEnd: (time: string) => void;
}

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  setDate,
  setTimeStart,
  setTimeEnd,
}) => {
  const [showInputs, setShowInputs] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeStart, setSelectedTimeStart] = useState('');
  const [selectedTimeEnd, setSelectedTimeEnd] = useState('');
  const dateTimeRangePickerRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (selectedDate === '') {
      setSelectedDate('');
      return;
    }
    setSelectedDate(moment(selectedDate).format('L'));
  }, [selectedDate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'date') {
      setSelectedDate(value);
      setDate(selectedDate);
    } else if (name === 'timeStart') {
      setSelectedTimeStart(value);
      setTimeStart(selectedTimeStart);
    } else if (name === 'timeEnd') {
      setSelectedTimeEnd(value);
      setTimeEnd(selectedTimeEnd);
    }
  };

  const handleInputClick = () => {
    setShowInputs(true);
  };

  const handleMouseEnter = () => {
    setShowInputs(true);
  };

  const handleMouseLeave = () => {
    setShowInputs(false);
  };

  const checkIfselectedSomething = () => {
    if (
      selectedDate === '' &&
      selectedTimeStart === '' &&
      selectedTimeEnd === ''
    )
      return false;
    return true;
  };

  return (
    <div
      ref={dateTimeRangePickerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="dateTimeRangePicker"
    >
      <input
        type="text"
        onClick={handleInputClick}
        readOnly
        placeholder="Select date and time"
        value={
          checkIfselectedSomething()
            ? `${selectedDate} · ${selectedTimeStart} - ${selectedTimeEnd}`
            : ''
        }
        required
      />
      {showInputs && (
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={selectedDate}
            onChange={handleInputChange}
          />
          <div className="timeDiv">
            <div>
              <label>From</label>
              <input
                type="time"
                name="timeStart"
                value={selectedTimeStart}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>To</label>
              <input
                type="time"
                name="timeEnd"
                min={selectedTimeStart}
                value={selectedTimeEnd}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
