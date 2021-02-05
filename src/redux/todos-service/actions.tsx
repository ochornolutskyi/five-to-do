import axios from 'axios';
import { Dispatch } from 'redux';
import {
	ADD_NEW_TASK,
	CHANGE_TASK_TITLE,
	COMPLETE_TASK,
	GET_TODOS,
	GET_TODOS_FAILED,
	GET_TODOS_SUCCESS,
	REMOVE_TASK,
} from '../actions-types';
import { Task } from '../../shared/types/task';
import { IGetTodos, IGetTodos_FAILED, IGetTodos_SUCCESS } from './interfaces';

export const getTodos = () => async (
	dispatch: Dispatch<IGetTodos | IGetTodos_SUCCESS | IGetTodos_FAILED>
): Promise<void> => {
	try {
		dispatch({ type: GET_TODOS });
		const TODOS_URL: string = 'https://jsonplaceholder.typicode.com/todos';
		const response = await axios.get(TODOS_URL);
		const result = await response.data;
		dispatch({ type: GET_TODOS_SUCCESS, payload: result });
	} catch (err) {
		dispatch({ type: GET_TODOS_FAILED });
	}
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
