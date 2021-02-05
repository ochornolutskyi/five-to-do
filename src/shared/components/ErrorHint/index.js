import './ErrorHint.scss';

const className = 'error-hint';

const ErrorHint = ({ hintText }) => {
	return <div className={className}>{hintText}</div>;
};

export default ErrorHint;
