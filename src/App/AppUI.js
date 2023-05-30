import React from 'react'
import { CreateTodoButton } from '../CreateTodoButton/Index'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodoContext } from '../TodoContext'


function AppUI() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {searchedTodos.map((todo) => {
                    return <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() =>
                            completeTodo(todo.text)}
                        onDelete={() =>
                            deleteTodo(todo.text)}
                    />
                })}
            </TodoList>


            <CreateTodoButton />

        </>
    )
}

export { AppUI }