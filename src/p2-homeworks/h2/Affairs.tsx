import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from "./Affairs.module.css"

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={style.wrapper}>
            {mappedAffairs}
            <div className={style.sort__buttons}>
                <button className={style.sort__button} onClick={setAll}>All</button>
                <button className={style.sort__button} onClick={setHigh}>High</button>
                <button className={style.sort__button} onClick={setMiddle}>Middle</button>
                <button className={style.sort__button} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
