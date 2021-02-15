import { useEffect, FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getTodos } from './redux/todos-service/actions';
import { selectorGetIsFetchedErr, selectorGetIsLoading } from './redux/todos-service/selector';
import { Store } from './redux/root';
import TODOS from './pages/TODOS';
import Loader from './shared/components/Loader';
import ErrorHint from './shared/components/ErrorHint';
import './App.scss';

const App: FC<TodosProps> = ({ isLoading, getTodos, isFetchedErr }) => {
	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className="App">
			{isLoading ? (
				<Loader />
			) : isFetchedErr ? (
				<ErrorHint hintText="Something went wrong, please, reload the page" />
			) : (
				<TODOS />
			)}
		</div>
	);
};
const mapStateToProps = (store: Store) => ({
	isLoading: selectorGetIsLoading(store),
	isFetchedErr: selectorGetIsFetchedErr(store),
});

const mapDispatchToProps = {
	getTodos,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type TodosProps = ConnectedProps<typeof connector>;

export default connector(App);
