import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface TodoState {

    todos: {

        id: string | number,
        name: string,
    }[],
}

const initialState: TodoState = {

    todos: [{ id: 1, name: 'Hello Todo' }]
}


const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {

        addTodo: (state, action: PayloadAction<string>) => {

            const todo = {

                id: nanoid(),
                name: action.payload,
            }

            state.todos.push(todo);
        },

        removeTodo: (state, action: PayloadAction<string | number>) => {

            state.todos.filter(todo => todo.id !== action.payload);
        },

        updateTodo: (state, action: PayloadAction<{ id: string | number, name: string }>) => {

            const { id, name } = action.payload;
            const UpdateTodo = state.todos.find(todo => todo.id === id);
            if (UpdateTodo) {

                UpdateTodo.name = name;
            }
        }
    }


})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;