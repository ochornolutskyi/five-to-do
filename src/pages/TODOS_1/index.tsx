import React from 'react';
import CreateTask from '../../shared/components/CreateTask';
import TodosList from './TodosList';

const TODOS_1 = () => {
	return (
		<div>
			<CreateTask />
			<hr style={{ width: '95%', borderColor: '#fff' }} />
			<TodosList />
		</div>
	);
};

export default TODOS_1;
