
import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {



    const shuffleAnswers = useRef();

    if (!shuffleAnswers.current) {
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {
                shuffleAnswers.current.map((answer) => {

                    const isSelected = selectedAnswer === answer;
                    let cssClases = '';

                    if (answerState === 'answered' && isSelected) {
                        cssClases = 'selected';
                    }

                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClases = answerState;
                    }
                    return (
                        <li key={answer} className="answer">
                            <button 
                            className={cssClases} 
                            onClick={() => onSelect(answer)} 
                            disabled={answerState !== ''}>
                                {answer}</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}