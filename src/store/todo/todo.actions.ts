import {
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  MARK_COMPLETED,
} from "./todo.constant";
import { ToDoItem } from "./todo.reducer";


export const addNewTodo = (todo: ToDoItem) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      title: todo?.title,
      description: todo?.description,
    },
  };
};
export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const clearAlltodo = () => {
  return {
    type: CLEAR_ALL_TODO,
  };
};

export const editTodo = (id: number) => {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
    },
    isEdit: true,
  };
};

export const updateTodo = (id: number, todo: ToDoItem) => {
  return {
    type: UPDATE_TODO,
    payload: {
      todoId: id,
      todoTitle: todo?.title,
      todoDescription: todo?.description,
    },
  };
};

export const markTodoCompleted = (id: number) => {
  return {
    type: MARK_COMPLETED,
    payload: {
      selectedTodoId: id
    }
  }
}
