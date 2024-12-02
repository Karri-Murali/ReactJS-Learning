import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {

    const modal = useRef();

    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className='text-xl font-bold text-stone-900 my-4'>InValid Input</h2>
                <p className='text-stone-700 mb-4'>Please make sure provide a valid value for every Input Field</p>
            </Modal>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    className="w-64 px-1 py-1 rounded-sm bg-stone-200"
                    onChange={handleChange}
                    value={enteredTask} />
                <button
                    className="text-stone-700 hover:text-stone-950"
                    onClick={handleClick}>Add Task</button>
            </div>
        </>
    );
}