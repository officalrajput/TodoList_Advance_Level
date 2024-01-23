import { createContext, useContext } from "react";

export let TodoContext=createContext({
    todo:[
        {
            id:1,
            todo:"Todo Msg",
            completed:false,

        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const useTodo=()=>{
 return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider;
