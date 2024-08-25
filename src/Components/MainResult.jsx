
import React from 'react';
import PieQ from './PieQ';
import Result from './Result';
import './MainResult.css';

const MainResult = ({  score,correctAnswers, wrongAnswers }) => {
  return (
    <div>
      <h1 className='main-result'>Quiz Results</h1>
      <Result
        total={score}
        correct={correctAnswers}
        wrong={ score-correctAnswers}
      />
      <PieQ correct={correctAnswers} wrong={score-correctAnswers} />
    </div>
  );
};

export default MainResult;
