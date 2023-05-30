import React, { useState } from 'react';
import { useLocalStorage } from "./useLocalStorage";
import { Todos } from '../CreateTodoButton/Index'

const TodoContext = React.createContext()

function TodoProvider({ children }) {

    React.useEffect(() => {
        let tanto = JSON.parse(localStorage.getItem('TODOS_V1'))
        function loadTodos() {
            if (tanto) {
                tanto.map(ele => {
                    Todos.push(ele)
                })
            }
        }
        loadTodos();
    }, []);


    const [todos, setTodos] = useState(Todos)

    const {
        item: item,
        saveItem: setItem,
    } = useLocalStorage('TODOS_V1', Todos)

    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    const completeTodo = (text) => {
        const todoIndex =
            todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed =
            !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );

        Todos.splice(todoIndex, 1)
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const saveTodos = (newTodos) => {
        localStorage.setItem('TODOS_V1',
            JSON.stringify(newTodos))
        setTodos(newTodos)
    }


    return (
        <TodoContext.Provider value={{
            setTodos,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }