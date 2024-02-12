import React from 'react';

const Term = ({ term }) => {
  return (
    <div 
      style={{ 
        backgroundColor: '#b2e1ff',
        padding: '1% 2%',
        borderRadius: '20px',
      }}
    >
      {term}
    </div>
  );
}

export default Term;