import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Store } from '../../../redux/root';
import { selectorGetShouldTodos_1, selectorGetCompletedTodos_1 } from '../../../redux/todos-service/selector';
import TodoItemContainer from './TodoItemContainer';
import Title from '../../../shared/components/Title';
import { COMPLETED_TITLE, TASK_LIST_CLASS_NAME, TASK_LIST_ITEM_CLASS_NAME, TODO_TITLE } from '../../../core/_consts';
import './TodosList.scss';

const TodosList: FC<TodosListProps> = ({ shouldTodos_1, completedTodos_1 }) => {
	const sholdTodoTasksComponent = shouldTodos_1.map(task => (
		<TodoItemContainer key={task.id} {...task} className={`${TASK_LIST_ITEM_CLASS_NAME}__todo`} />
	));
	const completedTasksComponent = completedTodos_1.map(task => (
		<TodoItemContainer key={task.id} {...task} className={`${TASK_LIST_ITEM_CLASS_NAME}__complete`} />
	));
	return (
		<div>
			<div className={TASK_LIST_CLASS_NAME}>
				<Title className={TASK_LIST_CLASS_NAME} title={TODO_TITLE} />
				{sholdTodoTasksComponent}
			</div>
			<div className={TASK_LIST_CLASS_NAME}>
				<Title className={TASK_LIST_CLASS_NAME} title={COMPLETED_TITLE} />
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
