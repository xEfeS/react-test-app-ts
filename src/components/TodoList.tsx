import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const TodoList:React.FC = () => {

    const {isLoading,error,limit,page,todos,} = useTypedSelector(state => state.todo)
    const {fetchTodos,setTodosPage} = useAction()
    const pages = [1,2,3,4,5]

    useEffect(()=>{
        fetchTodos(page,limit)
    },[page])

    if (isLoading){
        return <h1>Loading...</h1>
    }
    if (error){
        return <h1>Error</h1>
    }


    return (
        <div>
            {
                todos.map(todo =>
                    <div key={todo.id}>
                        {todo.id} - {todo.title}
                    </div>
                )
            }
            <div style={{display:"flex"}}>
                {
                    pages.map((p,index) =>
                        <div key={index}
                             onClick={() => setTodosPage(p)}
                             style={{border:p === page ? '2px solid #000' : '1px solid gray',padding:10}}
                        >
                            {p}
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default TodoList;
