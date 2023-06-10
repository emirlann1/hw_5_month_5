import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import React from 'react'


export default function EditTodo () {
    const [ title, setTitle ] = useState()
    const dispatch = useDispatch()
    const { id } = useParams()
    const back = useNavigate()

    const clickButton = () => {
        dispatch({
            type: 'EDIT_TODOS',
            payload: {id: id, title: title}
        })
        back(-1)
    }

    return (
        <div>
            <input type="text" placeholder={'title'} value={title} onInput={e => setTitle(e.target.value)}/>
            <button onClick={() => clickButton}>Изменить</button>
        </div>
    )
}