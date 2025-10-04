import { useEffect, useRef } from 'react';
import style from './Modal.module.css';

import { createPortal } from 'react-dom';

export default function Modal({children, show, ...props}) {
    const dialog = useRef();

    useEffect(() => 
    {
        show ? dialog.current.showModal() : dialog.current.close()
    },
    [show])

    return createPortal (
        <dialog className= {style.dialog} {...props} ref={dialog}>{children}</dialog>,
        document.getElementById('modal')
    )
}