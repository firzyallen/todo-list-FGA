import React from 'react';

const Button = ({ color = 'black', onClick, name, type }) => {
  return (
    <div className="button">
      <button
        style={{
          backgroundColor: color,
          border: `2px solid ${color}`,
          color: 'white',
        }}
        onClick={onClick}
        type={type}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
