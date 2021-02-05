import { Store } from 'redux/root';
import { Task } from 'shared/types/task';

export const selectorGetTodos_1 = (store: Store): Array<Task> => {
	return store.todos_1Redux.tasks;
};
export const selectorGetIsLoading = (store: Store): boolean => {
	return store.todos_1Redux.isLoading;
};

export const selectorGetShouldTodos_1 = (store: Store): Array<Task> => {
	return store.todos_1Redux.tasks.filter(task => !task.completed);
};

export const selectorGetCompletedTodos_1 = (store: Store): Array<Task> => {
	return store.todos_1Redux.tasks.filter(task => task.completed);
};
