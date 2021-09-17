import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass: string = error ? s.error + " " + s.inputField : s.inputField

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
            />
            <button className={s.btn} onClick={addUser} disabled={!name}>Add</button>
            <span className={s.counter}>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
