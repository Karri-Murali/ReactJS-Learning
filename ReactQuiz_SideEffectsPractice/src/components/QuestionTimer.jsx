import { useEffect, useState } from "react";

export default function QuestionTimer({ timer, onTimeOut , mode }) {

    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        console.log('TIME OUT SET');
        const timeOut = setTimeout(onTimeOut, timer);

        return () => {
            clearTimeout(timeOut);
        }
    },[timer , onTimeOut]);

    useEffect(() => {
        console.log('TIME INTERVAL SET');
        const timeInterval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(timeInterval);
        }
    }, []);

    return (
        <progress id="question-time" className={mode} value={remainingTime} max={timer}></progress>
    )
}