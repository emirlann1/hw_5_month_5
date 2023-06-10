import { addTodo, deleteTodo, fetchTodos } from '../store/todoReducer.jsx'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

export default function TodoList() {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const inputTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const sendForm = () => {
        if (newTodo.trim() !== '') {
            const newTask = {
                id: Date.now(),
                title: newTodo,
                completed: false
            }
            dispatch(addTodo(newTask))
            setNewTodo('')
        }
    }

    const clickDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(() => {
                dispatch(deleteTodo(id))
            })
        console.log(deleteTodo(id))
    }

    return (
        <div className="wrapper">
            <h2>TodoList</h2>
            <input type="text" onChange={inputTodo} value={newTodo} placeholder="Add new Todo..." />
            <button className="btn" onClick={sendForm}>Добавить</button>

            <div>
                {todos && (
                    <ul>
                        {todos.map(t => (
                            <li key={t.id}>
                                <Link to={`/${t.id}`}>{t.title}</Link>
                                <button className="delBtn" onClick={() => clickDelete(t.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

