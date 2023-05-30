import './TodoList.css'

function TodoList(props) {
    return (
        <div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export { TodoList } 