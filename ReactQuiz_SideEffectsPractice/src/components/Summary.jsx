import quizCompleteLogo from '../assets/quiz-complete.png';
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer , index) => QUESTIONS[index].answers[0] === answer
    );
    const skippedAnswerShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );
    const correctAnswerShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    )
    const wrongAnswersShare = 100 - skippedAnswerShare - correctAnswerShare;
    return (
        <div id="summary">
            <img src={quizCompleteLogo} />
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswerShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswerShare}%</span>
                    <span className='text'>answer Correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersShare}%</span>
                    <span className='text'>Answer incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer , index) => {

                    let cssClases = 'user-answer';

                    if(answer === null){
                        cssClases += ' skipped';
                    }else if(answer === QUESTIONS[index].answers[0]){
                        cssClases += ' correct';
                    }
                    else{
                        cssClases += ' wrong';
                    }
                    return (
                        <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{QUESTIONS[index].text}</p>
                        <p className={cssClases}>{answer ?? 'Skipped'}</p>
                    </li>
                    )
                })}
            </ol>
        </div>
    )
}