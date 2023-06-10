import { Routes, Route } from 'react-router-dom'
import TodoList from './pages/TodoList.jsx'
import EditTodo from './pages/EditTodo.jsx'
import './App.css'


export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<TodoList />}/>
            <Route path={'/:id'} element={<EditTodo />}/>
        </Routes>
    )
}