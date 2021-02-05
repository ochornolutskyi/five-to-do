import { FC } from 'react';

type TodoItemTitleProps = {
	className: string;
	title: string;
};

const DefaultTodoItemTitle: FC<TodoItemTitleProps> = ({ className, title }) => {
	return <div className={className}>{title}</div>;
};
export default DefaultTodoItemTitle;
