import React, {MouseEvent} from 'react'
import style from "./Affair.module.css"
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const {affair} = props
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }

    return (
        <div className={style.affair__wrapper}>
            <div className={style.affair__name}>
                {affair.name}
            </div>
            <div className={style[affair.priority]}>
                {"[" + affair.priority + "]"}
            </div>
            <div className={style.affair__button_wrapper}>
                <button className={style.affair__button}
                    onClick={(event:MouseEvent<HTMLButtonElement>)=>deleteCallback(affair._id)}
                >x
                </button>
            </div>
        </div>
    )
}

export default Affair
