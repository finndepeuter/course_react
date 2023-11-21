import {Link, useNavigate} from 'react-router-dom';
import CapitalsApi from '../apis/capitals_api';
import { useState } from 'react';
import  InputForm  from './input_form';

function Game() {
    const navigate = useNavigate();
    const api = new CapitalsApi();
    const [question, setQuestion]  = useState(0);
    const [score, setScore] = useState(1);

    // TODO: fix the game, so the score is correcct
    const handleAnswerClick = (selectedAnswer) => {
        // Check if the selected answer is correct
        const isCorrect = selectedAnswer === api.get(question).capital;
    
        if (question + 1 < api.count()) {
            if (isCorrect) {
                setScore(score +1);
                // If the answer is correct, move to the next question
            }
            setQuestion(question + 1);
        } else {
            // If there are no more questions, navigate to form
            // TODO: handle the input form
        }
        console.log(score);
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
                <p>{question +1 }. Which city is the capital of {questionData.country}?</p>
                {answerOptions}
                <Link onClick={() => navigate(-1)}>stop playing</Link>
            </div>
        );
}

export default Game;