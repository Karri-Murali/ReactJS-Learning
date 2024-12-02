import { useState } from "react"
export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    function handleOnClick() {
        setEditing((isEditing) => !isEditing);
        if (isEditing) {
            console.log(playerName);
            onChangeName(symbol, playerName);
        }
    }
    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }
    if (isEditing)
        editablePlayerName = <input type="text" name="playerName" value={playerName} onChange={handleChange} required />
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleOnClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}