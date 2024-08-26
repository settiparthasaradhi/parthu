
import React from 'react';
import './Question.css';

const Question = ({ questions, onQuestionNumberClick, answerInd, reviewedQuestions }) => {
    if (!Array.isArray(questions)) {
        console.error('Expected an array of questions, but received:', typeof questions, questions);
        return <div>Error: Questions should be an array.</div>;
    }

    return (
        <div className="container-ques">
            <div className="question-container">
                {questions.map((_, index) => (
                    <div
                        key={index}
                        className={`question-number ${answerInd[index] !== null ? 'answered' : ''} ${reviewedQuestions[index] ? 'reviewed' : ''}`}
                        onClick={() => onQuestionNumberClick(index)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;

