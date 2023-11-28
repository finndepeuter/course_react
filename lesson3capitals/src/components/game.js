import {Link } from 'react-router-dom';
import CapitalsApi from '../apis/capitals_api';
import { useState, useEffect } from 'react';
import  InputForm  from './input_form';

function Game() {
    //const navigate = useNavigate();
    const api = new CapitalsApi();
    const [question, setQuestion]  = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        console.log(score); // Log the updated score after each render
      }, [score]);

    const handleAnswerClick = (selectedAnswer) => {
        // Check if the selected answer is correct
        
        if (question + 1 < api.count()) {
            if (selectedAnswer === api.get(question).capital) {
                setScore((score) => score + 1);
                // If the answer is correct, move to the next question
            }
            setQuestion(question + 1);
        } else {
            // If there are no more questions, handle last answer and navigate to form
            if (selectedAnswer === api.get(question).capital) {
                setScore((score) => score + 1);
            }
            setGameOver(true);
        }
    };

    // Get the current question and answer options
    const questionData = api.get(question);
    const answerOptions = api.getAnswers(question).map( (option, index) => {
       return (
        <p className="city" key={index} onClick={() => handleAnswerClick(option)}>
                        {option}
                    </p>
       )
    });


        return (
            <div>
                <h2>Game</h2>
                {gameOver ? (
        <div>
          <p>The end! Your score: {score}/{api.count()}</p>
          <InputForm score={score} />
        </div>
      ) : (
        <div>
          <p>
            {question + 1}. Which city is the capital of {questionData.country}?
          </p>
          {answerOptions}
          <Link to="/">Stop playing</Link>
        </div>
      )}
            </div>
        );
}

export default Game;