import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {

    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const currentQuestionIndex = answeredQuestions.length;

    const quizIsComplete = QUESTIONS.length === answeredQuestions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setAnsweredQuestions((prevAnswers) => {
            return [...prevAnswers, answer]
        });

    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    }, [handleSelectAnswer])

    if (quizIsComplete) {
      return <Summary userAnswers={answeredQuestions}/>
    }


    return (
        <div id="quiz">
            <Question
                key={currentQuestionIndex}
                index={currentQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}