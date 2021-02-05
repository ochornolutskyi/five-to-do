import { ChangeEvent, FC, useState } from 'react';
import './CreateTask.scss';
import Title from '../Title';
import { addNewTask } from 'redux/todos-service/actions';
import { connect, ConnectedProps } from 'react-redux';

const TITLE_TASK_PLACEHOLDER = 'Please, add task title';
const CREATE_TASK_TITLE = 'Please, create the new task';
const className = 'createTask';

const initTitle: string = '';
type TTitle = typeof initTitle;

const CreateTask: FC<CreateNewTaskProps> = ({ addNewTask }) => {
	const [title, setTitle] = useState<TTitle>(initTitle);
	const changeHandler = (value: string): void => {
		setTitle(value);
	};

	return (
		<div className={`${className}-wrapper`}>
			<Title className={className} title={CREATE_TASK_TITLE} />
			<div className={className}>
				<input
					type="text"
					className={`${className}-input`}
					onChange={(event: ChangeEvent<HTMLInputElement>): void => changeHandler(event.target.value)}
					placeholder={TITLE_TASK_PLACEHOLDER}
					value={title}
				/>
				<button
					className={!title.trim().length ? 'buttonDisable' : ''}
					onClick={(): void => {
						addNewTask(title.trim());
						setTitle(initTitle);
					}}
					disabled={!title.trim().length}
				/>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	addNewTask,
};

const connector = connect(null, mapDispatchToProps);
type CreateNewTaskProps = ConnectedProps<typeof connector>;

export default connector(CreateTask);
