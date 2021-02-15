import React, { FC } from 'react';
import CreateTask from '../../shared/components/CreateTask';
import TodosList from './TodosList';

const TODOS: FC = () => {
	return (
		<div>
			<CreateTask />
			<hr style={{ width: '95%', borderColor: '#fff' }} />
			<TodosList />
		</div>
	);
};

export default TODOS;
