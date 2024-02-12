import React from 'react';
import Term from './Term';

const Course = ({ code, name, rating, reviews, terms }) => {
  let starsFilled = "";
  for (let i = 0; i < parseInt(rating); i++) {
    starsFilled += "★";
  }
  let starsEmpty = "";
  while (starsEmpty.length < 5 - starsFilled.length) {
    starsEmpty += "★";
  }

  return (
    <div style={{ 
      backgroundColor: '#f3f3f3', 
      width: '25%', 
      borderRadius: '10px', 
      padding: '1% 2%',
      margin: '2% 0',
      boxShadow: '0 10px 20px #d1d1d1',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ margin: '0', paddingRight: '10%' }}>{code}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div style={{ margin: '0', fontSize: '2em' }}>
            <span style={{ color: '#b789e5' }}>{starsFilled}</span>
            <span style={{ color: '#cecece' }}>{starsEmpty}</span>
          </div>
          <div style={{ margin: '0', paddingLeft: '4px', color: '#949494' }}>{reviews} reviews</div>
        </div>
      </div>
      <p style={{ marginBottom: '15%' }}>{name}</p>
      <div style={{ display: 'flex', gap: '5%', marginBottom: '5%' }}>
        {terms.map((term) => (
          <Term key={term} term={term} />
        ))}
      </div>
    </div>
  );
}

export default Course;