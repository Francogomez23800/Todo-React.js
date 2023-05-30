
function addTask(searchValue, todos, setSearchValue) {
    if (searchValue.length >= 1) {
        const newTodo = { text: searchValue, completed: false }
        todos.push(newTodo)
        localStorage.setItem('TODOS_V1', JSON.stringify(todos))
        setSearchValue('')
    }
}


export { addTask }