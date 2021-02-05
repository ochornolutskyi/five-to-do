import React, { FC, useState } from 'react';
import EditingTitleRenderer from './TodoItemTitle/EditingTitleRenderer';
import DefaultTitleRenderer from './TodoItemTitle/DefaultTitleRenderer';
import { connect, ConnectedProps } from 'react-redux';
import { completeTask, removeTask } from 'redux/todos-service/actions';
import { Task } from 'shared/types/task';

type TodoItemContainerParentProps = {
	className: string;
};
const initIsEditing = false;
type TIsEditing = boolean;

const TodoItemContainer: FC<TodoItemContainerProps> = ({
	className,
	title,
	id,
	completed,
	completeTask,
	removeTask,
}) => {
	const taskTitleClassName = `${className}-title`;
	const [isEditing, setIsEditing] = useState<TIsEditing>(initIsEditing);

	const titleRenderer = !isEditing ? (
		<DefaultTitleRenderer className={taskTitleClassName} title={title} />
	) : (
		<EditingTitleRenderer
			className={`${taskTitleClassName} editing`}
			title={title}
			id={id}
			setIsEditing={setIsEditing}
		/>
	);
	const isRenderButton = !completed && !isEditing;
	return (
		<div className={className}>
			{titleRenderer}
			<div className={`${className}-options`}>
				{isRenderButton && <button className={`${className}-options__done`} onClick={() => completeTask(id)} />}
				{isRenderButton && (
					<button
						className={`${className}-options__edit`}
						onClick={() => {
							setIsEditing(true);
						}}
					/>
				)}
				<button className={`${className}-options__remove`} onClick={() => removeTask(id)} />
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	completeTask,
	removeTask,
};
const connector = connect(null, mapDispatchToProps);
type TodoItemContainerProps = ConnectedProps<typeof connector> & TodoItemContainerParentProps & Task;

export default connector(TodoItemContainer);
