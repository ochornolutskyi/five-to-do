import { Task } from 'shared/types/task';

//actions
export interface IGetTodos_1 {
	type: string;
}
export interface IGetTodos_1_SUCCESS {
	type: string;
	payload: Array<Task>;
}
export interface IGetTodos_1_FAILED {
	type: string;
}
export interface IChangeTask {
	type: string;
	payload: {
		id: number;
		title: string;
	};
}
//
export interface ITodos {
	isLoading: boolean;
	tasks: Array<Task>;
}
