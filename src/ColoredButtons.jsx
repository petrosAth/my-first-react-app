import { useState } from 'react';

const COLORS = ['pink', 'red', 'orange', 'green', 'blue', 'purple'];

const ColoredButtons = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ margin: '50px', display: 'flex', alignItems: 'center', justifyContent: 'spaceBetween', gap: '10px' }}>
      {COLORS.map((color, index) => {
        return (
          <button
            type="button"
            className={'colored-button' + (backgroundColor === color ? ` active active--${color}` : '')}
            style={{ textTransform: 'capitalize', padding: '10px 20px' }}
            key={index}
            onClick={onButtonClick(color)}
          >
            {color}
          </button>
        );
      })}
    </div>
  );
};

export default ColoredButtons;
