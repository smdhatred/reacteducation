import { useState } from "react";
import arrowUp from "/arrow_drop_up.svg"
import arrowDown from "/arrow_drop_down.svg"

import style from "./InfoLine.module.css"

export default function InfoLine({title, info}) {
    const [open, setOpen] = useState(false);
    return (
        <li className={style.item} onClick={() => setOpen(!open)}>
            <div className={style.header}>
                <h3 className={style.title}><strong>{title}</strong></h3>
                <img src={open ? arrowUp : arrowDown} alt="" />
            </div>
            {open && <div className={style.content}>
                <p>{info}</p>
            </div>}
        </li>
    )
}