import React, { ChangeEvent, FC, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { changeTaskTitle } from 'redux/todos-service/actions';
import ErrorHint from 'shared/components/ErrorHint';

const HINT_TEXT = "The title can't be empty";

type EditingTitleRendererParentProps = {
	className: string;
	setIsEditing: any;
	id: number;
	title: string;
	changeTaskTitle: any;
};

const EditingTitleRenderer: FC<EditingTitleRendererProps> = ({
	changeTaskTitle,
	className,
	id,
	title,
	setIsEditing,
}) => {
	const [newTitle, setNewTitle] = useState(title);
	const [isShowHint, setIsShowHint] = useState(false);
	const changeTitleHandler = (value: string): void => {
		setNewTitle(value);
	};
	const confirmNewTitle = (id: number, newTitle: string): void => {
		if (newTitle.trim() === title) {
			setIsEditing(false);
		} else if (!newTitle.trim().length) {
			setIsShowHint(true);
			setTimeout(() => setIsShowHint(false), 1500);
		} else {
			changeTaskTitle(id, newTitle.trim());
			setIsEditing(false);
		}
	};
	return (
		<div className={className}>
			<input
				type="text"
				onChange={(event: ChangeEvent<HTMLInputElement>): void => changeTitleHandler(event.target.value)}
				value={newTitle}
			/>
			<button className="button-apply" onClick={(): void => confirmNewTitle(id, newTitle)} />
			{isShowHint && <ErrorHint hintText={HINT_TEXT} />}
		</div>
	);
};

const mapDispatchToProps = {
	changeTaskTitle,
};

const connector = connect(null, mapDispatchToProps);
type EditingTitleRendererProps = ConnectedProps<typeof connector> & EditingTitleRendererParentProps;

export default connector(EditingTitleRenderer);
