import axios from 'axios';
import { Dispatch } from 'redux';
import {
	ADD_NEW_TASK,
	CHANGE_TASK_TITLE,
	COMPLETE_TASK,
	GET_TODOS_1,
	GET_TODOS_1_FAILED,
	GET_TODOS_1_SUCCESS,
	REMOVE_TASK,
} from 'redux/actions-types';
import { Task } from 'shared/types/task';
import { IGetTodos_1, IGetTodos_1_FAILED, IGetTodos_1_SUCCESS } from './interfaces';

export const getTodos_1 = (): any => (dispatch: Dispatch<IGetTodos_1 | IGetTodos_1_SUCCESS | IGetTodos_1_FAILED>) => {
	dispatch({ type: GET_TODOS_1 });
	const TODOS_1_URL: string = 'https://jsonplaceholder.typicode.com/todos';
	axios
		.get(TODOS_1_URL)
		.then(data => {
			return dispatch({ type: GET_TODOS_1_SUCCESS, payload: data.data });
		})
		.catch(err => dispatch({ type: GET_TODOS_1_FAILED }));
};

export const addNewTask = (title: string) => (dispatch: Dispatch) => {
	const newTask: Task = { id: Date.now(), title, completed: false };
	dispatch({
		type: ADD_NEW_TASK,
		payload: newTask,
	});
};
export const completeTask = (id: number) => (dispatch: Dispatch) => {
	dispatch({
		type: COMPLETE_TASK,
		payload: id,
	});
};

export const removeTask = (id: number) => async (dispatch: Dispatch) => {
	dispatch({
		type: REMOVE_TASK,
		payload: id,
	});
};

export const changeTaskTitle = (id: number, title: string) => async (dispatch: Dispatch) => {
	dispatch({ type: CHANGE_TASK_TITLE, payload: { id, title } });
};
