import React, { FC } from 'react';
import './Title.scss';

type TitleProps = {
	title: string;
	className: string;
};

const Title: FC<TitleProps> = ({ title, className }) => {
	return <span className={`${className}-title title`}>{title}</span>;
};

export default Title;
