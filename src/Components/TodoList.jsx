import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text, done: false }]);
        setText("");
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <input type="text" value={text} onChange={onChange} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.done ? "line-through" : "" }} onClick={() => toggleTodo(todo.id)}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;