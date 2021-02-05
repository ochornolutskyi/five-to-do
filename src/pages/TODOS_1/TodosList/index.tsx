import React, { FC } from 'react';
import './TodosList.scss';
import TodoItemContainer from './TodoItemContainer';
import { connect, ConnectedProps } from 'react-redux';
import Title from 'shared/components/Title';
import { Store } from 'redux/root';
import { selectorGetShouldTodos_1, selectorGetCompletedTodos_1 } from 'redux/todos-service/selector';

const TODO_TITLE = 'Should to do tasks';
const COMPLETED_TITLE = 'Completed tasks';
const taskListClassName = 'tasks-list';
const taskClassName = 'task-item';

const TodosList: FC<TodosListProps> = ({ shouldTodos_1, completedTodos_1 }) => {
	const sholdTodoTasksComponent = shouldTodos_1.map(task => (
		<TodoItemContainer key={task.id} {...task} className={`${taskClassName}__todo`} />
	));
	const completedTasksComponent = completedTodos_1.map(task => (
		<TodoItemContainer key={task.id} {...task} className={`${taskClassName}__complete`} />
	));
	return (
		<div>
			<div className={taskListClassName}>
				<Title className={taskListClassName} title={TODO_TITLE} />
				{sholdTodoTasksComponent}
			</div>
			<div className={taskListClassName}>
				<Title className={taskListClassName} title={COMPLETED_TITLE} />
				{completedTasksComponent}
			</div>
		</div>
	);
};

const mapStateToProps = (store: Store) => ({
	shouldTodos_1: selectorGetShouldTodos_1(store),
	completedTodos_1: selectorGetCompletedTodos_1(store),
});
const connector = connect(mapStateToProps);
type TodosListProps = ConnectedProps<typeof connector>;

export default connector(TodosList);
