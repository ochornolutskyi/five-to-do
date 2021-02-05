import {
	GET_TODOS_1,
	GET_TODOS_1_FAILED,
	GET_TODOS_1_SUCCESS,
	ADD_NEW_TASK,
	COMPLETE_TASK,
	REMOVE_TASK,
	CHANGE_TASK_TITLE,
} from '../actions-types';
import { ITodos } from 'redux/todos-service/interfaces';
import { Task } from 'shared/types/task';

const initState: ITodos = {
	isLoading: false,
	tasks: [],
};

const findTaskById = (tasks: Array<Task>, id: number): Task | undefined => tasks.find(task => task.id === id);
const completeTask = (tasks: Array<Task>, id: number): Array<Task> => {
	const currentTask = findTaskById(tasks, id);
	if (!!currentTask) {
		currentTask.completed = true;
		return [...tasks.filter(task => task.id !== currentTask.id), currentTask];
	}
	return [...tasks];
};
const changeTask = (tasks: Array<Task>, id: number, title: string): Array<Task> => {
	const currentTask = findTaskById(tasks, id);
	if (!!currentTask) {
		currentTask.title = title;
		return [...tasks];
	}
	return [...tasks];
};

const todos_1_reducer = (state = initState, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case GET_TODOS_1:
			return { ...state, isLoading: true };
		case GET_TODOS_1_SUCCESS:
			return {
				...state,
				isLoading: false,
				tasks: [...payload.splice(0, 15)],
			};
		case GET_TODOS_1_FAILED:
			return { ...state, isLoading: false, tasks: [] };
		case ADD_NEW_TASK:
			return {
				...state,
				tasks: [...state.tasks, payload],
			};
		case REMOVE_TASK:
			return { ...state, tasks: state.tasks.filter(task => task.id !== payload) };
		case COMPLETE_TASK:
			return {
				...state,
				tasks: completeTask(state.tasks, payload),
			};
		case CHANGE_TASK_TITLE:
			return { ...state, tasks: changeTask(state.tasks, payload.id, payload.title) };
		default:
			return state;
	}
};

export default todos_1_reducer;
